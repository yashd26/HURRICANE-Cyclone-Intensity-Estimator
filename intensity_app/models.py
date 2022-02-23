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

    storm_id = models.AutoField(primary_key=True)
    storm_name = models.CharField(max_length=50, help_text='Enter cyclone name', null=True, blank=True)
    intensity = models.FloatField(null=True, blank=True)
    category = models.IntegerField(choices=category_choices, default=1)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        ordering = ['storm_name', '-date']

    def __str__(self):
        return self.storm_name

class StormTrack(models.Model):
    storm_data = models.ForeignKey('StormData', on_delete=models.CASCADE)
    intensity = models.FloatField(null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
