from django.db import models

# Albums
class Albums(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    description = models.TextField()
    artwork = models.CharField(max_length=255)
    background = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
        return self.title


# Tracks
class Tracks(models.Model):
    track_title = models.CharField(max_length=255)
    track_number = models.IntegerField()
    album = models.ForeignKey(Albums, on_delete=models.CASCADE)

    def __str__(self):
        return self.track_title




