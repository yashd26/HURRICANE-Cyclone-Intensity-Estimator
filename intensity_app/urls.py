from django.urls import path , re_path
from . import views
from django.views.generic import RedirectView

urlpatterns = [
  re_path(r'^home/$', views.home, name="home"),
  re_path(r'^home/all/$', views.explore_all, name="explore_all"),
  re_path(r'^explore/$', views.explore, name="explore"),
  re_path(r'^readcontent/$', views.readcontent, name="readcontent"),
  re_path(r'^about/$', views.about, name="about"),
  re_path(r'^explore/(?P<year>[0-9]{4})/$', views.explore_by_year, name="explore_by_year"),
  re_path(r'^explore/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/$', views.explore_by_month, name="explore_by_month"),
  re_path(r'^explore/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<date>[0-9]{2})/$', views.explore_by_date, name="explore_by_date"),
  path('explore/<str:name>/', views.explore_by_name, name="explore_by_name"),
  path('explode/', views.storm_detail, name="url_name"),
]

urlpatterns += [
  path('', RedirectView.as_view(url='home/', permanent=True)),
]
