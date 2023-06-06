from django.shortcuts import render

def home(request):
    context = {'title':'Daniel Mendes',
               'copyrigth': 'Copyrigth Daniel Mendes',
               'curriculo':'O que eu sei:'}
    return render(request, 'index.html', context)
# Create your views here.
