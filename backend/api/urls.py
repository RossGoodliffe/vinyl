from django.urls import path
from . import views

urlpatterns = [
    path('albums/', views.AlbumsListCreate.as_view(), name='album-view-create'),
    path('albums/<int:pk>/', views.AlbumsRetrieveUpdateDestory.as_view(), name='album-update'),
    path('tracks/', views.TracksListCreate.as_view(), name='track-view-create'),
    path('tracks/<int:pk>/', views.TracksRetrieveUpdateDestory.as_view(), name='track-update'),
]
