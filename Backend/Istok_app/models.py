from django.contrib.auth.models import User
from django.db import models
from django.core.validators import RegexValidator
from users.models import Loyalty


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



class Application(models.Model):

    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,12}$',
        message="Телефон должен быть указан в формате: "
                "'+7ХХХХХХХХХХ'. Максимум 12 символов.")

    TYPES = [
        ('1', 'Кухня'),
        ('2', 'Гардероб'),
        ('3', 'Прихожая'),
        ('4', 'Комод'),
        ('5', 'Стеллаж'),
        ('6', 'Комплексный заказ'),
    ]
    FORMS = [
        ('1', 'Прямая'),
        ('2', 'П-образная'),
        ('3', 'Угловая'),
        ('4', 'Г-образная'),
    ]
    ADDS = [
        ('1', 'Барная стойка'),
        ('2', 'Остров'),
        ('3', 'Без дополнений'),
    ]
    MATERIAL = [
        ('1', 'ЛДСП'),
        ('2', 'Пленка ПВХ'),
        ('3', 'Пластик AGT'),
        ('4', 'Пластик Fenix'),
        ('5', 'Эмаль'),
    ]
    TABLE = [
        ('1', 'Столешница компакт-ламинат'),
        ('2', 'Кварцевая столешница'),
        ('3', 'Столешница ЛДСП с покрытием HPL'),
        ('4', 'Акриловая столешница'),
    ]
    PLUMB = [
        ('1', 'Необходим подбор сантехники'),
        ('2', 'Подбор сантехники не нужен'),
    ]
    APPLIANCES = [
        ('1', 'Необходим подбор техники'),
        ('2', 'Подбор техники не нужен'),
    ]
    BUDGET = [
        ('1', 'до 300 000 ₽'),
        ('2', 'от 300 000 ₽ до 500 000 ₽'),
        ('3', 'от 500 000 ₽ до 700 000 ₽'),
        ('4', 'от 700 000 ₽'),
    ]
    CONSULTATION = [
        ('1', 'Консультация нужна'),
        ('2', 'Консультация не нужна'),
    ]
    CONNECTION = [
        ('1', 'Звонок'),
        ('2', 'Telegram'),
        ('3', 'ВКонтакте'),
    ]
    type = models.CharField(null=True, blank=True, max_length=1, choices=TYPES, default=None, verbose_name='Тип мебели')
    form = models.CharField(null=True, blank=True, max_length=1, choices=FORMS, default=None, verbose_name='Форма мебели')
    addition = models.CharField(null=True, blank=True, max_length=1, choices=ADDS, default=None, verbose_name='Дополнения')
    facades_material = models.CharField(null=True, blank=True, max_length=1, choices=MATERIAL, default=None, verbose_name='Материал фасада')
    table_material = models.CharField(null=True, blank=True, max_length=1, choices=TABLE, default=None, verbose_name='Материал столешницы')
    plumb = models.CharField(null=True, blank=True, max_length=1, choices=PLUMB, default=None, verbose_name='Кухонная сантехника')
    appliances = models.CharField(null=True, blank=True, max_length=1, choices=APPLIANCES, default=None, verbose_name='Бытовая техника')
    budget = models.CharField(null=True, blank=True, max_length=1, choices=BUDGET, default=None, verbose_name='Бюджет проекта')
    consultation = models.CharField(null=True, blank=True, max_length=1, choices=CONSULTATION, default=None,
                                    verbose_name='Консультация с экспертом по обустройству дома')
    last_name = models.CharField(max_length=150, verbose_name='Фамилия')
    first_name = models.CharField(max_length=150, verbose_name='Имя')
    patronymic = models.CharField(null=True, blank=True, max_length=150, verbose_name='Отчество')
    phone = models.CharField(validators=[phone_regex], max_length=12,
                             blank=False, verbose_name='Ваш номер телефона')
    connection = models.CharField(max_length=1, choices=CONNECTION, default=None, verbose_name='Как с Вами связаться?')
    link = models.CharField(null=True, blank=True, max_length=150, verbose_name='Ваша ссылка на Telegram/ВКонтакте')
    data = models.CharField(null=True, blank=True, max_length=30, verbose_name='Дата')
    time = models.CharField(null=True, blank=True, max_length=30, verbose_name='Время')


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
    #todo надо написать сеттер для данного поля и собирать фио из данных объектов user и profile
    order_user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Ф.И.О.')
    order_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата заказа')
    order_shipment_date = models.DateTimeField(null=True, verbose_name='Дата доставки')
    order_status = models.CharField(max_length=1, choices=STATUSES, default='1', verbose_name='Статус заказа')
    order_delivery_address = models.CharField(null=True, max_length=150, verbose_name='Адрес доставки')
    order_contract = models.CharField(max_length=150, verbose_name='Договор')
    order_price = models.FloatField(verbose_name='Стоимость заказа')
    order_sketch1 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз1')
    order_sketch2 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз2')
    order_sketch3 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз3')
    order_sketch4 = models.ImageField(default='default_mebel.jpg', verbose_name='Эскиз4')
    order_3D_model = models.ImageField(default='default_mebel.jpg', verbose_name='3D модель')

    # Добавил поле для указания кода лояльности
    # Позже к нему нужно добавить в форму проверку на существование такого кода
    # и если существует сохранить отношение.
    order_by_loyalty_code = models.ForeignKey(Loyalty, models.SET_NULL, blank=True, null=True)



