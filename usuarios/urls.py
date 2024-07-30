from django.urls import path
from . import views

urlpatterns = [
    path('cadastrar_usuarios/', views.cadastrar_usuarios, name="cadastrar_usuarios")
]
