from django.shortcuts import render

def home(request):
    context = {'title':'Sensei Daniel Mendes'}
    return render(request, 'index.html', context)
# Create your views here.
