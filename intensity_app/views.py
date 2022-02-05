from django.shortcuts import render 

def home(request): 
    return render(request,'intensity_app/home.html')

def explore(request): 
    return render(request,'intensity_app/explore.html')

def readcontent(request): 
    return render(request,'intensity_app/readcontent.html')