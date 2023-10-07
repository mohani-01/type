import json
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponseRedirect
from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from json import dump
import csv
from .models import Test
# Create your views here.

def index(request):
    return render(request, "writing/index.html")




def account(request):
    # return HttpResponse("hello")
    return render(request, "writing/profile.html")


def getText(request):

    file = open("/words.txt")
    read = csv.reader(file)
    for readd in read:
        print(readd)
    file.close()
    return HttpResponseRedirect(reverse('index'))

@login_required(login_url='/login')
def save(request):
    
    if request.method == "POST":
        print(request.user)
        data = json.loads(request.body)

        all_data = data.get("wpm") == data.get("raw") == data.get("accuracy") == data.get("time") == data.get("char")
        print("WPM", data.get("wpm"), "rAW", data.get("raw"), "ACCURACY", data.get("accuracy"), "Time", data.get("time"), "Char", data.get("char"), "<<End", data.get("wpm") == data.get("raw") == data.get("accuracy") == data.get("time") == data.get("char"))
        if not data.get("wpm") or not  data.get("raw") or not data.get("accuracy") or not data.get("time") or not data.get("char"):
            return JsonResponse({"error":"One or more fields are missing"}, status=400)
        
        test = Test(
            user = request.user,
            text_types = data.get("time"),
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
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, username=email, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "writing/login.html", {
                "message": "Invalid email and/or password."
            })
    else:
        return render(request, "writing/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]

        if not email or not password:
            return render(request, "writing/register.html", {
                "message": "All fields are required"
            })


        if password != confirmation:
            return render(request, "writing/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(email, email, password)
            user.save()
        except IntegrityError as e:

            return render(request, "writing/register.html", {
                "message": "Email address already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "writing/register.html")
