from django.shortcuts import render
from django.template import RequestContext
from adopcion.forms import RegisterForm
from django.contrib.auth.models import User

# Create your views here.

def misperris(request):
    return render(request, 'adopcion/index.html', {})

def form1(request):
    return render(request, 'adopcion/form.html', {})

def prueba(request):
    return render(request, 'adopcion/prueba.html', {})

def register_view(request):
    form = RegisterForm()
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            usuario = form.cleaned_data['usuario']
            nombre = form.cleaned_data['nombre']
            apellido = form.cleaned_data['apellido']
            email = form.cleaned_data['email']
            password_one = form.cleaned_data['password_one']
            password_two = form.cleaned_data['password_two']
            u = User.objects.create_user(username=usuario,first_name=nombre,last_name=apellido, email=email, password=password_one, is_staff=True)
            u.save()
            return render(request, 'adopcion/index.html', {})
        else:
            ctx = {'form':form}
            return render(request, 'adopcion/register.html', ctx)
    ctx = {'form':form}
    return render(request, 'adopcion/register.html', ctx)

