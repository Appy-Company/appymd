from django.shortcuts import render

# Create your views here.


def page(request):
    return render(request, 'main.html', {})


def main(request):
    return render(request, 'index.html', {})
