from birthday import BirthdayField
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):

    PLANING_TIME = [
        ('0', 'Нет, не планирую'),
        ('1', 'Планирую, но не определился со временем'),
        ('2', 'Уже идет'),
        ('3', 'Скоро приступаем'),
        ('4', 'В течение полугода'),
        ('5', 'В течение года')
    ]

    surname = models.CharField(unique=False, verbose_name='Отчество', blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name='User джанго модели', primary_key=True)
    birth_date = BirthdayField(null=True, verbose_name='Дата рождения')

    # repair_planing_time = models.CharField(null=True, max_length=1, choices=PLANING_TIME,
    #                                        verbose_name='Когда планируется ремонт?')
    #
    # #todo вместо этого костыля создать еще модель типа мебели, и прописать отношения многие ко многим с мультивыбором.
    # f_kitchen = models.BooleanField(default=False, verbose_name='Кухня', blank=True)
    # f_wardrobe = models.BooleanField(default=False, verbose_name='Гардероб', blank=True)
    # f_hallway = models.BooleanField(default=False, verbose_name='Прихожая', blank=True)
    # f_rack = models.BooleanField(default=False, verbose_name='Стеллаж', blank=True)
    # f_dresser = models.BooleanField(default=False, verbose_name='Комод', blank=True)

    mailing = models.BooleanField(default=False, verbose_name='Согласие на рассылку', blank=True)
    personal_data_processing = models.BooleanField(default=False, blank=True,
                                                   verbose_name='Согласие на обработку персональных данных')
    # children_having = models.BooleanField(default=False, verbose_name='Наличие детей', blank=True)




    def __str__(self):
        return f'{self.user.username} Profile'




# для быстрого подключения в консоли
# from django.contrib.auth.models import User
# from users.models import Profile
# p = Profile.objects.all().first()
