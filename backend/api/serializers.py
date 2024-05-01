from rest_framework import serializers
from .models import Albums, Tracks

class AlbumsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Albums
        fields = ['id', 'title', 'artist', 'description', 'artwork', 'background', 'rating']


class TracksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tracks
        fields = ['id', 'track_number', 'track_title', 'album']





