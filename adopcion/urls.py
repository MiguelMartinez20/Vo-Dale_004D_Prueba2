from django.urls import path
from . import views
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.misperris, name='misperris'),
    path('registro/', views.register_view, name='register_view'),
    path('reset-password/', PasswordResetView.as_view(), name='reset_password'),
    path('reset-password/done/', PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset-password/confirm/P<uidb64>P<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset-password/complete/', PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('accounts/login/', views.loginview, name ='loginview'),
    path('adopcion/', views.dog_list, name ='adopcion'),
    path('dog/<int:pk>/', views.dog_detail, name='dog_detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

