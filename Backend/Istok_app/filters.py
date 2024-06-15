import django_filters
from .models import Finished_furniture

class FinishedFurnitureFilter(django_filters.FilterSet):
    price_from = django_filters.NumberFilter(field_name='price', lookup_expr='gte', label='Стоимость от')
    price_to = django_filters.NumberFilter(field_name='price', lookup_expr='lte', label='Стоимость до')

    class Meta:
        model = Finished_furniture
        fields = {
            'type': ['exact'],
            'form': ['exact'],
            'body_material': ['exact'],
            'facades_material': ['exact'],
        }

