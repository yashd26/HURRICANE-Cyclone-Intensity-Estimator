from django.contrib import admin
from .models import StormData
from .models import StormTrack

# Register your models here.
admin.site.register(StormData)
admin.site.register(StormTrack)
