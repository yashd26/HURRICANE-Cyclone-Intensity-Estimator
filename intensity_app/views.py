from django.shortcuts import render ,redirect
from .models import StormData

def home(request):
    return render(request, 'intensity_app/home.html')

def explore_all(request):
    print("explore_all")
    context = {
        'storms' : StormData.objects.all(),
    }    
    return render(request, 'intensity_app/explore.html' , context)

def explore(request):
    return render(request,'intensity_app/explore.html')

def readcontent(request): 
    return render(request,'intensity_app/readcontent.html')

def about(request):
    return render(request, 'intensity_app/about.html')

def explore_by_name(request, name):
    storms = StormData.objects.filter(storm_name=name)
    context = {
        "storms" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def explore_by_year(request, year):
    storms = StormData.objects.filter(origin_date__year=year)
    context = {
        "storms" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def explore_by_month(request, year, month):
    storms = StormData.objects.filter(origin_date__year=year, 
        origin_date__month=month)
    context = {
        "storms" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def explore_by_date(request, year, month, date):
    storms = StormData.objects.filter(origin_date__year=year, 
        origin_date__month=month, 
        origin_date__day=date)
    context = {
        "storms" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def storm_detail(request):
    storms = StormData.objects.filter(storm_id=request.GET['id'])
    context = {
        "storms" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)
