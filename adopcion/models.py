from django.db import models

# Create your models here.

class Dog(models.Model):
    photo = models.ImageField(upload_to='dog_image', blank=False)
    name = models.CharField(max_length=30, min_length=1)
    race = models.CharField(max_length=30, min_length=1)
    description = models.CharField(max_length=100, min_length=5)
    state = models.CharField()

    def publish(self):
        self.save()

    def __str__(self):
        return self.name