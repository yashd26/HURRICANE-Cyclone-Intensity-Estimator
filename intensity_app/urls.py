from django.urls import path
from . import views

urlpatterns = [
  path('home/', views.home),
  path('explore/', views.explore),
  path('readcontent/', views.readcontent),
] 
