from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "writing/index.html")


def account(request):
    # return HttpResponse("hello")
    return render(request, "writing/profile.html")