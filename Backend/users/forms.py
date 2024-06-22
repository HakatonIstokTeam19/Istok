from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile  #, CustomUser
from .validations import *

from allauth.account.forms import (SignupForm, LoginForm)
from django.contrib.auth.validators import UnicodeUsernameValidator

from django.forms import SelectDateWidget




class CustomSignupForm(SignupForm):
    """Форма дополняющая регистрационную форму allauth новыми полями.
    Необходимо прописать путь в настройкахACCOUNT_FORMS = {'signup': 'news.forms.BasicSignupForm'}"""

    username = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Email или номер телефона'}),
        label='Контактный номер',
        max_length=12,
        required=True,
        validators=[phone_regex],
        error_messages={
            "unique": "Пользователь с таким номером уже зарегистрирован",
        },
    )
    first_name = forms.CharField(label="Имя", required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Имя'})
    )
    last_name = forms.CharField(label="Фамилия", required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Фамилия'})
    )
    surname = forms.CharField(label="Отчество", required=False,
        widget=forms.TextInput(attrs={'placeholder': 'Отчество'})
    )
    birth_date = forms.DateField(label='Дата рождения', widget=SelectDateWidget(years=years_range()))
    mailing = forms.BooleanField(label='Согласен получать промокоды, выгодные предложения и информацию о скидках',
        required=False)

    label = 'Согласен на обработку персональных данных и с условиями пользовательских соглашений.'
    personal_data_processing = forms.BooleanField(label=label, required=False)


    class Meta:
        # model = CustomUser
        model = User
        fields = ('first_name', 'last_name', 'surname', 'birth_date', 'username', 'email', 'password1', 'password2',
                  'mailing', 'personal_data_processing')


    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


    def save(self, request):
        user = super().save(request)
        data = self.cleaned_data
        try:
            Profile.objects.create(surname=data.get('surname'), user=user, birth_date=data.get('birth_date'),
                mailing=data.get('mailing'),
                personal_data_processing=data.get('personal_data_processing'),)

        except Exception as e:
            print(f'\n\n!!! НЕИЗВЕТСНАЯ ОШИБКА СОЗДАНИЯ ПРОФИЛЯ!!!\n cleaned_data == {data}\n{e}')

        return user

















