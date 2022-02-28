from django.db import models

# Create your models here.
class StormData(models.Model):
    category_choices = (
        (1, 'Tropical Depression'),
        (2, 'Tropical Storm'),
        (3, 'Category 1'),
        (4, 'Category 2'),
        (5, 'Category 3'),
        (6, 'Category 4'),
        (7, 'Category 5'),
    )

    storm_id = models.IntegerField(primary_key=True)
    storm_name = models.CharField(max_length=50, help_text='Enter cyclone name')
    category = models.IntegerField(choices=category_choices, default=1)

    class Meta:
        ordering = ['-storm_id', 'storm_name']

    def __str__(self):
        return self.storm_name

class StormTrack(models.Model):
    storm_data = models.ForeignKey('StormData', on_delete=models.CASCADE, related_name='storm_track_list')
    intensity = models.FloatField()
    labels = models.FloatField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    date = models.DateTimeField()

    class Meta:
        ordering = ['-date']
