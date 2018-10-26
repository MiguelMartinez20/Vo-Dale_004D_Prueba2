from django.db import models

# Create your models here.

class Dog(models.Model):

    RESCATADO = 'Rescatado'
    DISPONIBLE = 'Disponible'
    ADOPTADO = 'Adoptado'

    STATE_CHOICES = (
        (RESCATADO, 'Rescatado'),
        (DISPONIBLE, 'Disponible'),
        (ADOPTADO, 'Adoptado'),
    )

    photo = models.ImageField(upload_to='dog_image')
    name = models.CharField(max_length=30)
    race = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    state = models.CharField(max_length=10, choices=STATE_CHOICES, default=RESCATADO)

    def publish(self):
        self.save()

    def update(self):
        self.state = "Adoptado"
        self.save()

    def __str__(self):
        return self.name

class AdoptionRegister(models.Model):

    #owner = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    owner = models.CharField(max_length=30)
    dogname = models.CharField(max_length=30)

    def publish(self):
        self.save()


    def __str__(self):
        return self.owner