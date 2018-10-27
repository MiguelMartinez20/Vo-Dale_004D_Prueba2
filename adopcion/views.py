from django.shortcuts import render, redirect, get_object_or_404
from adopcion.forms import RegisterForm
from django.contrib.auth.models import User
from .models import Dog, AdoptionRegister

# Create your views here.

def misperris(request):
    return render(request, 'adopcion/index.html', {})

def form1(request):
    return render(request, 'adopcion/form.html', {})

def prueba(request):
    return render(request, 'adopcion/prueba.html', {})

def congrats(request):
    return render(request, 'adopcion/congrats.html', {})

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
            return render(request, 'adopcion/welcome.html', {})
        else:
            ctx = {'form':form}
            return render(request, 'adopcion/register.html', ctx)
    ctx = {'form':form}
    return render(request, 'adopcion/register.html', ctx)

def loginview(request):
    url = "http://migmartinezm.pythonanywhere.com/admin"
    return redirect(url)

def dog_list(request):
    dogs= Dog.objects.filter(state="Disponible")
    return render(request, 'adopcion/gallery.html', {'dogs': dogs})

def dog_detail(request, pk):
    dog = get_object_or_404(Dog, pk=pk)

    if (request.method == "POST"):

        owner = request.user
        AdoptionRegister.objects.create(owner=owner, dogname=dog.name)
        dog.update()

        url = "http://migmartinezm.pythonanywhere.com/congrats"
        return redirect(url)
    else:
        return render(request, 'adopcion/dog_detail.html', {'dog': dog})




