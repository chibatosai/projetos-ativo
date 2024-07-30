from django.http import HttpResponse
from django.shortcuts import render
from rolepermissions.decorators import has_permission_decorator
from .models import Users

@has_permission_decorator('cadastrar_usuarios')
def cadastrar_usuarios(request):
    if request.method == "GET":
        return render(request, 'cadastrar_usuarios.html')
    if request.method == "POST":
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        user = Users.objects.filter(email=email)

        if user.exists():
            # TODO: Ultilizar messages do Django
            return HttpResponse('E-mail já existe')
        
        user = Users.objects.create_user(username=email, email=email, password=senha, cargo='V')

        return HttpResponse('Conta criada com sucesso!!')
# Create your views here.
