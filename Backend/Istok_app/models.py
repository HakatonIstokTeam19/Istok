from django.contrib.auth.models import User
from django.db import models


class Finished_furniture(models.Model):

    TYPES = [
        ('1', 'Гардероб'),
        ('2', 'Детская'),
        ('3', 'Комод'),
        ('4', 'Кухня'),
        ('5', 'Прихожая'),
    ]

    FORMS = [
        ('1', 'Прямая'),
        ('2', 'Г-образная'),
        ('3', 'П-образная'),
        ('4', 'С барной стойкой'),
        ('5', 'С островом'),
    ]

    MATERIAL = [
        ('1', 'ЛДСП'),
        ('2', 'МДФ'),
        ('3', 'Пленка ПВХ'),
        ('4', 'Пластик AGT'),
        ('5', 'Пластик Fenix'),
        ('6', 'Эмаль'),
    ]

    name = models.CharField(null=True, max_length=150, verbose_name='Название')
    type = models.CharField(max_length=1, choices=TYPES, default='1', verbose_name='Тип мебели')
    form = models.CharField(max_length=1, choices=FORMS, default='1', verbose_name='Форма мебели')
    body_material = models.CharField(max_length=1, choices=MATERIAL, default='1', verbose_name='Материал корпуса')
    facades_material = models.CharField(max_length=1, choices=MATERIAL, default='1', verbose_name='Материал фасадов')
    price = models.FloatField(null=True, blank=True, verbose_name='Стоимость')
    image_1 = models.ImageField(null=True, blank=True, verbose_name='Изображение 1')
    image_2 = models.ImageField(null=True, blank=True, verbose_name='Изображение 2')
    image_3 = models.ImageField(null=True, blank=True, verbose_name='Изображение 3')
    image_4 = models.ImageField(null=True, blank=True, verbose_name='Изображение 4')




class Orders(models.Model):

    STATUSES = [
        ('1', 'Создан'),
        ('2', 'Выезд замерщика'),
        ('3', 'Подготовка эскиза'),
        ('4', 'Монтаж'),
        ('5', 'Выполнен'),
        ('6', 'Отклонен'),
    ]
    order_number = models.CharField(null=True, max_length=150, verbose_name='Номер заказа')
    order_user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Ф.И.О.')
    order_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')
    order_shipment_date =  models.DateTimeField(null=True, verbose_name='Дата доставки')
    order_status = models.CharField(max_length=1, choices=STATUSES, default='1', verbose_name='Статус заказа')
    order_delivery_address = models.CharField(null=True, max_length=150, verbose_name='Адрес доставки')
    order_contract = models.CharField(max_length=150, verbose_name='Договор')
    order_price = models.FloatField(verbose_name='Стоимость заказа')
    order_sketch1 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз1')
    order_sketch2 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз2')
    order_sketch3 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз3')
    order_sketch4 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз4')
    order_3D_model = models.ImageField(default='default_mebel.jpg', verbose_name='3D модель')


class Loyalty(models.Model):
    loyalty_user = models.ForeignKey(User, on_delete=models.CASCADE)
    loyalty_bonus_balance = models.IntegerField(null=True, blank=True, verbose_name=' Текущий баланс бонусных баллов')
    loyalty_personal_proposal = models.CharField(verbose_name='Персональные предложения')
    loyalty_QR_code = models.ImageField(verbose_name='QR-код')


