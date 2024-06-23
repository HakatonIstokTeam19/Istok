from django.urls import path, include
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('finished_furniture_list/', Finished_furnitureList.as_view(), name='finished_furniture_list'),
    path('finished_furniture_create/', Finished_furnitureCreate.as_view(), name='finished_furniture_create'),
    path('finished_furniture_detail/<int:pk>/', Finished_furnitureDetail.as_view(), name='finished_furniture_detail'),
    path('finished_furniture_update/<int:pk>/', Finished_furnitureUpdate.as_view(), name='finished_furniture_update'),
    path('application_create/', application_create, name='application_create'),
    path('application_accept/', application_accept, name='application_accept'),
    path('about/', about, name='about'),
    path('orders_list/', OrdersList.as_view(), name='orders_list'),
    path('orders/<int:pk>/', OrdersDetail.as_view(), name='orders_detail'),
    path('orders_create/', OrdersCreate.as_view(), name='orders_create'),
    path('orders_update/<int:pk>/', OrdersUpdate.as_view(), name='orders_update'),
    path('parts_list/', PartsList.as_view(), name='parts_list'),
    path('parts/<int:pk>/', PartsDetail.as_view(), name='parts_detail'),
    path('parts_create/', PartsCreate.as_view(), name='parts_create'),
    path('parts_update/<int:pk>/', PartsUpdate.as_view(), name='parts_update'),

]
