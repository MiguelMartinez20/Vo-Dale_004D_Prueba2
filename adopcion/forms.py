from django import forms

class RegisterForm(forms.Form):
    usuario = forms.CharField(label="Nombre de Usuario", widget=forms.TextInput())
    nombre = forms.CharField(label="Nombre", widget=forms.TextInput())
    apellido = forms.CharField(label="Apellido", widget=forms.TextInput())
    email = forms.CharField(label="Correo Electronico", widget=forms.TextInput())
    password_one = forms.CharField(label="Contraseña", widget=forms.PasswordInput(render_value=False))
    password_two = forms.CharField(label="Confirmar Contraseña", widget=forms.PasswordInput(render_value=False))


