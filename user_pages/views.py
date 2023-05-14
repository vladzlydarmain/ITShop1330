from django.shortcuts import render


def show_main(request):
    return render(request, 'user_pages/main.html', context={"title":"Головна сторінка"})


