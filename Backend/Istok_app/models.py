from django.contrib.auth.models import User
from django.db import models
from django.core.validators import RegexValidator
from users.models import Loyalty


class Tags(models.Model):
    tag = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f'{self.tag}'


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
    price = models.CharField(null=True, blank=True, max_length=150, verbose_name='Стоимость')
    image_1 = models.ImageField(null=True, blank=True, verbose_name='Изображение 1')
    image_2 = models.ImageField(null=True, blank=True, verbose_name='Изображение 2')
    image_3 = models.ImageField(null=True, blank=True, verbose_name='Изображение 3')
    image_4 = models.ImageField(null=True, blank=True, verbose_name='Изображение 4')
    tags = models.ManyToManyField(Tags, through='Finished_furniture_tags')


class Finished_furniture_tags(models.Model):
    finished_furniture = models.ForeignKey(Finished_furniture, on_delete=models.CASCADE)
    finished_furniture_tags = models.ForeignKey(Tags, on_delete=models.CASCADE)

class Application(models.Model):

    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,12}$',
        message="Телефон должен быть указан в формате: "
                "'+7ХХХХХХХХХХ'. Максимум 12 символов.")

    type = models.CharField(null=True, blank=True, max_length=150, verbose_name='Тип мебели')
    form = models.CharField(null=True, blank=True, max_length=150, verbose_name='Форма мебели')
    addition = models.CharField(null=True, blank=True, max_length=150, verbose_name='Дополнения')
    facades_material = models.CharField(null=True, blank=True, max_length=150, verbose_name='Материал фасада')
    table_material = models.CharField(null=True, blank=True, max_length=150, verbose_name='Материал столешницы')
    plumb = models.CharField(null=True, blank=True, max_length=150, verbose_name='Кухонная сантехника')
    appliances = models.CharField(null=True, blank=True, max_length=150, default=None, verbose_name='Бытовая техника')
    budget = models.CharField(null=True, blank=True, max_length=150, verbose_name='Бюджет проекта')
    consultation = models.CharField(null=True, blank=True, max_length=150,
                                    verbose_name='Консультация с экспертом по обустройству дома')
    last_name = models.CharField(max_length=150, verbose_name='Фамилия')
    first_name = models.CharField(max_length=150, verbose_name='Имя')
    patronymic = models.CharField(null=True, blank=True, max_length=150, verbose_name='Отчество')
    phone = models.CharField(validators=[phone_regex], max_length=12,
                             blank=False, verbose_name='Ваш номер телефона')
    connection = models.CharField(null=True, blank=True, max_length=150, verbose_name='Как с Вами связаться?')
    link = models.CharField(null=True, blank=True, max_length=150, verbose_name='Ваша ссылка на Telegram/ВКонтакте')
    data = models.CharField(null=True, blank=True, max_length=30, verbose_name='Дата')
    time = models.CharField(null=True, blank=True, max_length=30, verbose_name='Время')


class Orders(models.Model):
    code_3d = '<div class="sketchfab-embed-wrapper"> ' \
              '<iframe title="3D" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" ' \
              'allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking ' \
              'execution-while-out-of-viewport execution-while-not-rendered web-share ' \
              'src="https://sketchfab.com/models/b4ec7831bb3e416c841c50b88c1bea16/embed"> ' \
              '</iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; ' \
              'color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/3d-b4ec7831bb3e416c841c50b88c1bea16?utm_' \
              'medium=embed&utm_campaign=share-popup&utm_content=b4ec7831bb3e416c841c50b88c1bea16" target="_blank" ' \
              'rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> 3D </a> by ' \
              '<a href="https://sketchfab.com/ki1004ka?utm_medium=embed&utm_campaign=share-popup&utm_content=' \
              'b4ec7831bb3e416c841c50b88c1bea16" target="_blank" rel="nofollow" style="font-weight: bold; ' \
              'color: #1CAAD9;"> Alexander Vasiliev </a> on ' \
              '<a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=' \
              'b4ec7831bb3e416c841c50b88c1bea16" target="_blank" rel="nofollow" style="font-weight: ' \
              'bold; color: #1CAAD9;">Sketchfab</a></p></div>'
    STATUSES = [
        ('1', 'Создан'),
        ('2', 'Выезд замерщика'),
        ('3', 'Подготовка эскиза'),
        ('4', 'Монтаж'),
        ('5', 'Выполнен'),
        ('6', 'Отклонен'),
    ]
    order_user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Номер телефона')
    order_number = models.CharField(null=True, blank=True, max_length=150, verbose_name='Номер заказа')
    order_date = models.DateField(null=True, blank=True, verbose_name='Дата заказа')
    order_shipment_date = models.DateField(null=True, blank=True, verbose_name='Дата доставки')
    order_status = models.CharField(max_length=1, choices=STATUSES, default='1', verbose_name='Статус заказа')
    order_delivery_address = models.CharField(null=True, blank=True, max_length=150, verbose_name='Адрес доставки')
    order_contract = models.FileField(upload_to='Contrac', blank=True, verbose_name='Договор')
    order_price = models.FloatField(null=True, blank=True, verbose_name='Стоимость заказа')
    order_sketch1 = models.ImageField(null=True, blank=True, default=None, verbose_name='Эскиз1')
    order_sketch2 = models.ImageField(null=True, blank=True, default=None, verbose_name='Эскиз2')
    order_sketch3 = models.ImageField(null=True, blank=True, default=None, verbose_name='Эскиз3')
    order_sketch4 = models.ImageField(null=True, blank=True, default=None, verbose_name='Эскиз4')
    order_3D_model = models.CharField(null=True, blank=True, default=code_3d, max_length=20000, verbose_name='3D модель')
    order_by_loyalty_code = models.ForeignKey(Loyalty, models.SET_NULL, blank=True, null=True)


class Parts(models.Model):

    PARTS_TYPE = [
        ('1', 'Корпус'),
        ('2', 'Фасад'),
        ('3', 'Петли'),
        ('4', 'Ручки'),
        ('5', 'Направляющие'),
        ('6', 'Столешница'),
        ('7', 'Цоколь'),
        ('8', 'Опоры'),
        ('9', 'Стеновая панель'),
        ('10', 'Аксесуары'),
        ('11', 'Сантехника'),
        ('12', 'Бытовая техника'),
    ]

    UNIT = [
        ('1', 'шт.'),
        ('2', 'м'),
        ('3', 'кв.м'),
        ('4', 'пог.м'),
    ]

    order_number = models.ForeignKey(Orders, on_delete=models.CASCADE, verbose_name='Номер заказа')
    parts_type = models.CharField(max_length=5, choices=PARTS_TYPE, default=None, verbose_name='Тип комплектующих')
    parts_name = models.CharField(max_length=200, verbose_name='Наименование')
    parts_unit = models.CharField(max_length=1, choices=UNIT, default=None, verbose_name='Единица измерения')
    parts_quantity = models.FloatField(verbose_name='Количество')
    parts_price = models.FloatField(verbose_name='Цена')
    parts_image = models.ImageField(default='default_mebel.jpg', verbose_name='Изображение')

