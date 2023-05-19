from django.shortcuts import render


def show_main(request):
    return render(request, 'user_pages/main.html', context={"title":"Main page"})

def show_aboutus(request):
    return render(request, 'user_pages/aboutus.html', context={"title":"About us"})


