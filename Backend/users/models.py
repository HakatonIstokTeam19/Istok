from birthday import BirthdayField
from django.core.validators import RegexValidator
from django.db import models
from django.contrib.auth.models import User

phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,12}$',
        message="Phone number must be entered in the format: "
                                         "'+999999999'. Up to 12 digits allowed.")

class Profile(models.Model):
    GENDERS = [
                ('M', 'Мужской'),
                ('F', 'Женский'),
            ]
    CHILDRENS = [
                ('Yes', 'Да'),
                ('No', 'Нет'),
            ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(null=True, max_length=1, choices=GENDERS, verbose_name='Пол')
    phone = models.CharField(null=True, validators=[phone_regex], unique=True, max_length=14, blank=False, verbose_name='Телефон')
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    birth_date = BirthdayField(null=True, verbose_name='Дата рождения')
    children_having = models.CharField(null=True, max_length=3, choices=CHILDRENS,  verbose_name='Наличие детей')
    delivery_address = models.CharField(null=True, max_length=150, verbose_name='Адрес доставки')
    bonus_balance = models.IntegerField(null=True, blank=True, verbose_name=' Текущий баланс бонусных баллов')


    def __str__(self):
        return f'{self.user.username} Profile'