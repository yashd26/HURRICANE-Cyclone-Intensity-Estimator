from rest_framework import serializers
from . models import *

class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = StormTrack
        fields = ('id', 'intensity', 'labels', 'latitude', 'longitude', 'date')

class DataSerializer(serializers.ModelSerializer):
    storm_track_list = TrackSerializer(many=True)

    class Meta:
        model = StormData
        fields = ('storm_id', 'storm_name', 'category', 'storm_track_list')
        