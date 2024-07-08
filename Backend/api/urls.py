from django.urls import path
from . import views


urlpatterns = [
    path('api/v1/finished_fruniture_list', views.finished_furniture_api),
    path('api/v1/finished_fruniture_list/<int:id>', views.finished_furniture_api),
]
