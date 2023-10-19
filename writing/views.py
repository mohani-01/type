from itertools import chain
import json
from operator import attrgetter
import time
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError
from django.db.models import Count, Sum
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect
from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse

import csv
from .models import Test_Time, User, Test_Word
from .helpers import *
# Create your views here.

def index(request):
    return render(request, "writing/index.html")



@login_required(login_url='/login')
def account(request):

    user = User.objects.get(username=request.user)
    # get all the user time and word score
    data_time = user.time.all()
    data_word = user.word.all()

    # combine both the time and words score on key=time, get only 25 of them
    tables = sorted(chain(data_time, data_word), key=attrgetter('time'), reverse=True)[:25]


    # get the sum of total time user spend on the game and total games played(in seconds)
    alltime = data_time.aggregate(Sum("time_frame"), Count("game_type"))
    allwords = data_word.aggregate(Sum("time_frame"), Count("game_type"))

    
    # get the sum of time_frame in alltime and allwords
    tt = time.gmtime(get_sum(alltime['time_frame__sum'], allwords['time_frame__sum']))

    # then covert it into hour minute second format
    total_time = time.strftime("%H:%M:%S", tt)

    # get the total number of games
    total_test = get_sum(alltime['game_type__count'], allwords['game_type__count'])

    # get the best score of user in each time and words options
    times, words = get_data(request.user)


    return render(request, "writing/profile.html", {
        "times": times,
        "words": words,
        "total_time":total_time,
        "total_test":total_test,
        "tables": tables
    })





@login_required(login_url='/login')
def save_time(request):

    if request.method == "POST":

        # get the data
        data = json.loads(request.body)

        # check if all data's are avaiable
        if not data.get("wpm") or not  data.get("raw") or not data.get("accuracy") or not data.get("time") or not data.get("char"):
            return JsonResponse({"error":"One or more field is missing"}, status=400)

        # test types to consider
        test_types = [15, 30, 60, 120]

        # return incorect test type if the time isn't in the test types.
        if not int(data.get('time'))  in test_types:
            return JsonResponse({"error": "Incorrect test type!"}, status=406)
        
        # save the test
        test = Test_Time(
            user = request.user,
            test_type = data.get("time"),
            speed = data.get("wpm"),
            time_frame = data.get("time"),
            accuracy = data.get("accuracy"), 
            raw_speed = data.get("raw"),
            character = data.get("char")
        )
        test.save() 
    
        return JsonResponse({"success":"Test is sucessfully saved."}, status=201)
 
@login_required(login_url='/login')    
def save_word(request):
    if request.method == "POST":
        # get the data
        data = json.loads(request.body)

        # check if all data's are avaiable
        if not data.get("wpm") or not  data.get("raw") or not data.get("accuracy") or not data.get("time") or not data.get("char") or not data.get("type"):
            return JsonResponse({"error":"One or more field is missing"}, status=400)

        # test types to consider
        test_types = [10, 25, 50, 100]

        # return incorrect test type if  data.get('type') is not in test_types 
        if not int(data.get('type'))  in test_types:
            return JsonResponse({"error": "Incorrect test type!"}, status=406)
       
       # save the test
        test = Test_Word(
            user = request.user,
            test_type = data.get("type"),
            time_frame = data.get("time"),
            speed = data.get("wpm"),
            accuracy = data.get("accuracy"), 
            raw_speed = data.get("raw"),
            character = data.get("char")
        )

        test.save()
        return JsonResponse({"success":"Test is sucessfully saved."}, status=201)
 
    


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "writing/login.html", {
            "message_login": "Invalid username and/or password."
            })
    else:
        return render(request, "writing/login.html")




def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):

    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]



        # Ensure all fields are filled
        if not username or not email:
            return render(request, "writing/login.html", {
                "message_register": "Fill all the Fields."
            })
       
        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "writing/login.html", {
                "message_register": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "writing/login.html", {
                "message_register": "Username already taken."
            })

        login(request, user)
        return HttpResponseRedirect(reverse("index"))

    else:
        return render(request, "writing/login.html")
