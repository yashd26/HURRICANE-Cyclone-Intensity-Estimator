from django.shortcuts import render ,redirect
from .models import StormData

def home(request):
    return render(request, 'intensity_app/home.html')

def explore_all(request):
    context = {
        'storms_list' : StormData.objects.all(),
    }    
    return render(request, 'intensity_app/explore.html' , context)

def explore(request):
    return render(request,'intensity_app/explore.html')

def about(request):
    return render(request, 'intensity_app/about.html')

def explore_by_name(request, name):
    storms = StormData.objects.filter(storm_name=name)
    context = {
        "storms_list" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def explore_by_year(request, year):
    storms = StormData.objects.filter(origin_date__year=year)
    context = {
        "storms_list" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def explore_by_month(request, year, month):
    storms = StormData.objects.filter(origin_date__year=year, 
        origin_date__month=month)
    context = {
        "storms_list" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def explore_by_date(request, year, month, date):
    storms = StormData.objects.filter(origin_date__year=year, 
        origin_date__month=month, 
        origin_date__day=date)
    context = {
        "storms_list" : storms,
    }

    return render(request,'intensity_app/explore.html', context=context)

def storm_detail(request, id):
    show_card = True
    storms = StormData.objects.get(storm_id=id)
    name = request.GET.get('name', '')
    year = request.GET.get('year', '')
    month = request.GET.get('month', '')
    date = request.GET.get('date', '')
    if name != '':
        bg_storms = StormData.objects.filter(storm_name=name)
        context = {
            "storm" : storms,
            "bg_storms_list": bg_storms,
            "show_card": show_card,
        }
        return render(request,'intensity_app/explore.html', context=context)
    if year != '' and month != '' and date != '':
        storms = StormData.objects.filter(origin_date__year=year, 
                    origin_date__month=month, 
                    origin_date__day=date)
        context = {
            "storm" : storms,
            "bg_storms_list": bg_storms,
            "show_card": show_card,
        }
        return render(request,'intensity_app/explore.html', context=context)
    if year != '' and month != '':
        storms = StormData.objects.filter(
            origin_date__year=year, 
            origin_date__month=month
        )
        context = {
            "storm" : storms,
            "bg_storms_list": bg_storms,
            "show_card": show_card,
        }
        return render(request,'intensity_app/explore.html', context=context)
    if year != '':
        storms = StormData.objects.filter(origin_date__year=year)
        context = {
            "storm" : storms,
            "bg_storms_list": bg_storms,
            "show_card": show_card,
        }
        return render(request,'intensity_app/explore.html', context=context)
