from birthday import BirthdayField
from django.core.validators import RegexValidator
from django.db import models
from django.contrib.auth.models import User

phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,12}$',
        message="Телефон должен быть указан в формате: "
                                         "'+7ХХХХХХХХХХ'. Максимум 12 символов.")

class Profile(models.Model):

    PLANING_TIME = [
        ('1', 'Уже идет'),
        ('2', 'Скоро приступаем'),
        ('3', 'В течение полугода'),
        ('4', 'В течение года')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = BirthdayField(null=True, verbose_name='Дата рождения')
    phone = models.CharField(null=True, validators=[phone_regex], unique=True, max_length=12,
                             blank=False, verbose_name='Телефон')
    repair_planing = models.BooleanField(default=False, verbose_name='Планирование ремонта')
    repair_planing_time = models.CharField(null=True, max_length=1, choices=PLANING_TIME,
                                           verbose_name='Когда планируется ремонт?')
    mebel_type = models.CharField(null=True, max_length=250, verbose_name='Тип мебели')
    mailing = models.BooleanField(default=False, verbose_name='Согласие на рассылку')
    personal_data_processing = models.BooleanField(default=False,
                                                   verbose_name='Согласие на обработку персональных данных')
    children_having = models.BooleanField(default=False, verbose_name='Наличие детей')


    def __str__(self):
        return f'{self.user.username} Profile'