from django.shortcuts import render


def show_basket(request):
	return render(request, 'basket/basket.html', context={'title':'Корзина'})