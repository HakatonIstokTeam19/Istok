from django.core.validators import RegexValidator
from django.db import models





# class Orders(models.Model):
#
#     STATUSES = [
#         ('C', 'Создан'),
#         ('A', 'Принят'),
#         ('D', 'Отклонен'),
#     ]
#
#     order_user = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='user')
#     order_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')
#     order_price = models.CharField(max_length=150, verbose_name='Стоимость заказа')
#     order_contract = models.CharField(max_length=150, verbose_name='Договор')
#     order_sketch = models.CharField(max_length=150, verbose_name='Эскиз')
#     order_status = models.CharField(max_length=1, choices=STATUSES, default='C', verbose_name='Статус заказа')
#     order_installation_date = models.CharField(max_length=150, verbose_name='Дата установки')
#
