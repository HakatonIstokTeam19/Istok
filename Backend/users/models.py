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

    FURNITURE_TYPE = [
        ('1', 'Кухня'),
        ('2', 'Гардероб'),
        ('3', 'Прихожая'),
        ('4', 'Стелаж'),
        ('5', 'Комод')
    ]

    surname = models.CharField(null=True, unique=False, verbose_name='Отчество')
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name='User джанго модели')
    birth_date = BirthdayField(null=True, verbose_name='Дата рождения')
    phone = models.CharField(null=True, validators=[phone_regex], unique=True, max_length=12,
                             blank=False, verbose_name='Телефон')
    repair_planing = models.BooleanField(default=False, verbose_name='Планирование ремонта')
    repair_planing_time = models.CharField(null=True, max_length=1, choices=PLANING_TIME,
                                           verbose_name='Когда планируется ремонт?')
    furniture_type = models.CharField(null=True, max_length=250, verbose_name='Тип мебели', choices=FURNITURE_TYPE,)
    mailing = models.BooleanField(default=False, verbose_name='Согласие на рассылку', blank=True)
    personal_data_processing = models.BooleanField(default=False, blank=True,
                                                   verbose_name='Согласие на обработку персональных данных')
    children_having = models.BooleanField(default=False, verbose_name='Наличие детей', blank=True)


    def __str__(self):
        return f'{self.user.username} Profile'



# для быстрого подключения в консоли
# from django.contrib.auth.models import User
# from users.models import Profile
# p = Profile.objects.all().first()
