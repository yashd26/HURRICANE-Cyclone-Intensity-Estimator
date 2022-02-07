from django.db import models

# Create your models here.
class CycloneData(models.Model):
    category_choices = [
        (1, 'Category 1'),
        (2, 'Category 2'),
        (3, 'Category 3'),
        (4, 'Category 4'),
        (5, 'Category 5'),
    ]

    cyclone_name = models.CharField(max_length=50, help_text='Enter cyclone name', null=True, blank=True)
    intensity = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    category = models.IntegerField(choices=category_choices, default=1)
    latitude = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    longitude = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    origin_date_time = models.DateTimeField(null=True, blank=True)
