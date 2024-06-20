from django.urls import path, include
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('finished_furniture_list/', Finished_furnitureList.as_view(), name='finished_furniture_list'),
    path('finished_furniture_create/', Finished_furnitureCreate.as_view(), name='finished_furniture_create'),
    path('finished_furniture_detail/<int:pk>/', Finished_furnitureDetail.as_view(), name='finished_furniture_detail'),
    path('finished_furniture_update/<int:pk>/', Finished_furnitureUpdate.as_view(), name='finished_furniture_update'),
    path('application_create/', ApplicationCreate.as_view(), name='application_create'),
    path('application_accept/', application_accept, name='application_accept'),

    path('about/', about, name='about'),
    path('orders_list/', OrdersList.as_view(), name='orders_list'),
    path('orders/<int:pk>/', OrdersDetail.as_view(), name='orders_detail'),
    path('orders_create/', OrdersCreate.as_view(), name='orders_create'),
    path('orders_update/<int:pk>/', OrdersCreate.as_view(), name='orders_update'),

]