from django.shortcuts import render

def home(request):
    context = {'title':'Sensei Daniel Mendes',
               'copyrigth': 'Copyrigth Daniel Mendes',
               'hard_skills':'Hard Skills',
               'soft_skills':'Soft Skills',
               'portfolio':'All The Little & Big Things',
               'meus_alunos':'Quem Já foi meu aluno',
               'Eu':'O que eu faço',
               'Certificados':'Minhas Certificações'}
    return render(request, 'index.html', context)
# Create your views here.
