from birthday import BirthdayField
from django.db import models
from django.contrib.auth.models import User


# from django.utils import timezone
# from django.forms import TextInput
# from django.contrib.auth.models import UserManager, PermissionsMixin
# from django.contrib.auth.base_user import AbstractBaseUser
# from django import forms
# from .validations import *
#
#
# class CustomUser(AbstractBaseUser, PermissionsMixin):
#     username = models.CharField("username",
#         max_length=12,
#         unique=True,
#         blank=False,
#         validators=[phone_regex],
#         error_messages={
#             "unique": "Пользователь с таким номером уже зарегистрирован.",
#         },
#     )
#
#     first_name = models.CharField("Имя", max_length=150, blank=False)
#     last_name = models.CharField("Фамилия", max_length=150, blank=False)
#     email = models.EmailField("Email", blank=False)
#     is_staff = models.BooleanField(
#         "staff status",
#         default=False,
#         help_text="Designates whether the user can log into this admin site.",
#     )
#     is_active = models.BooleanField(
#         "active",
#         default=True,
#         help_text="Designates whether this user should be treated as active. "
#                   "Unselect this instead of deleting accounts.",
#     )
#     date_joined = models.DateTimeField("date joined", default=timezone.now)
#
#     objects = UserManager()
#
#     EMAIL_FIELD = "email"
#     USERNAME_FIELD = "username"
#     REQUIRED_FIELDS = ["email"]
#
#     class Meta:
#         verbose_name = "user"
#         verbose_name_plural = "users"
#         abstract = True
#
#     def clean(self):
#         super().clean()
#         self.email = self.__class__.objects.normalize_email(self.email)
#
#     def get_full_name(self):
#         """
#         Return the first_name plus the last_name, with a space in between.
#         """
#         full_name = "%s %s" % (self.first_name, self.last_name)
#         return full_name.strip()
#
#     def get_short_name(self):
#         """Return the short name for the user."""
#         return self.first_name
#
#     def email_user(self, subject, message, from_email=None, **kwargs):
#         """Send an email to this user."""
#         send_mail(subject, message, from_email, [self.email], **kwargs)





class Profile(models.Model):

    PLANING_TIME = [
        ('0', 'Нет, не планирую'),
        ('1', 'Планирую, но не определился со временем'),
        ('2', 'Уже идет'),
        ('3', 'Скоро приступаем'),
        ('4', 'В течение полугода'),
        ('5', 'В течение года')
    ]

    surname = models.CharField(max_length=30, unique=False, verbose_name='Отчество', blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name='User джанго модели', primary_key=True)
    birth_date = BirthdayField(null=True, verbose_name='Дата рождения')


    mailing = models.BooleanField(default=False, verbose_name='Согласие на рассылку', blank=True)
    personal_data_processing = models.BooleanField(default=False, blank=True,
                                                   verbose_name='Согласие на обработку персональных данных')




    def __str__(self):
        return f'{self.user.username} Profile'




# для быстрого подключения в консоли
# from django.contrib.auth.models import User
# from users.models import Profile
# p = Profile.objects.all().first()
