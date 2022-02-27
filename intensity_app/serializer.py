from rest_framework import serializers
from . models import *
  
class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = StormData
        fields = '__all__'
