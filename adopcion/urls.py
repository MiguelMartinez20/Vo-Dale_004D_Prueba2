from django.urls import path
from . import views


urlpatterns = [
    path('', views.misperris, name='misperris'),
    path('registro/', views.register_view, name='register_view'),

]