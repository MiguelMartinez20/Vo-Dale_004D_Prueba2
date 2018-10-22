from django.urls import path
from . import views

urlpatterns = [
    path('', views.misperris, name='misperris'),
    path('form/', views.form1, name='form1'),
    path('test/', views.prueba, name='prueba'),
]