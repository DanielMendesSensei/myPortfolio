from django.shortcuts import render

def home(request):
    context = {'title':'Daniel Mendes',
               'copyrigth': 'Copyrigth Daniel Mendes',
               'hard_skills':'Hard Skills',
               'soft_skills':'Soft Skills'}
    return render(request, 'index.html', context)
# Create your views here.
