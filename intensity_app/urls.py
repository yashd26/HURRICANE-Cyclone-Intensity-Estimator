from django.urls import path , re_path
from . import views
from django.views.generic import RedirectView

urlpatterns = [
  re_path(r'^home/$', views.home, name="home"),
  re_path(r'^explore/$', views.explore, name="explore"),
  re_path(r'^about/$', views.about, name="about"),
  re_path(r'^explore/all/$', views.explore_all, name="explore_all"),
  re_path(r'^explore/active/$', views.explore_active, name="explore_active")
  #re_path(r'^explore/(?P<name>[a-zA-Z]+)/$', views.explore_by_name, name="explore_by_name"),
  #re_path(r'^explore/(?P<year>[0-9]{4})/$', views.explore_by_year, name="explore_by_year"),
  #re_path(r'^explore/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/$', views.explore_by_month, name="explore_by_month"),
  #re_path(r'^explore/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<date>[0-9]{2})/$', views.explore_by_date, name="explore_by_date"),
  #re_path(r'^explore/.*/$', views.filter, name="filter"),
]

urlpatterns += [
  path('', RedirectView.as_view(url='home/', permanent=True)),
]