from django.shortcuts import render
from rest_framework import generics
from .serializers import AlbumsSerializer, TracksSerializer

from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly

from .models import Albums, Tracks

# Access all albums
class AlbumsListCreate(generics.ListCreateAPIView):
    queryset = Albums.objects.all()
    serializer_class = AlbumsSerializer
    permission_classes = [AllowAny]

# Access single album + either update/delete
class AlbumsRetrieveUpdateDestory(generics.RetrieveUpdateDestroyAPIView):
    queryset = Albums.objects.all()
    serializer_class = AlbumsSerializer
    lookup_field = 'pk'
    permission_classes = [AllowAny]

# Access all tracks
class TracksListCreate(generics.ListCreateAPIView):
    queryset = Tracks.objects.all()
    serializer_class = TracksSerializer
    permission_classes = [AllowAny]

# Access single Track + either update/delete
class TracksRetrieveUpdateDestory(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tracks.objects.all()
    serializer_class = TracksSerializer
    lookup_field = 'pk'
    permission_classes = [AllowAny]

