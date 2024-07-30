from django.urls import path
from . import views

urlpatterns = [
    path('listar_produtos/', views.listar_produtos, name='listar_produtos'),
    path('adicionar_produto', views.adicionar_produto, name='adicionar_produto'),
    path('editar/<int:pk>/', views.editar_produto, name='editar_produtos'),
]
