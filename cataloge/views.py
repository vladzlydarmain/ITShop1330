from django.shortcuts import render


def show_cataloge(request):
    return render(request,"cataloge/cataloge.html", context={"title":"Каталог"})

def show_product(request):
    return render(request,"cataloge/product_view.html", context={"title":"Перегляд продукту"})