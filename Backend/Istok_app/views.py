from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'Istok_app/home.html')


def about(request):
    return render(request, 'Istok_app/about.html')