from django.shortcuts import render

# Create your views here.

def misperris(request):
    return render(request, 'adopcion/index.html', {})

def form1(request):
    return render(request, 'adopcion/form.html', {})