from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from .models import Profile  #, CustomUser
from .validations import *

from allauth.account.forms import (SignupForm, LoginForm, ChangePasswordForm)
from django.contrib.auth.validators import UnicodeUsernameValidator

from django.forms import SelectDateWidget, ModelForm




class CustomSignupForm(SignupForm):
    """Форма дополняющая регистрационную форму allauth новыми полями.
    Необходимо прописать путь в настройкахACCOUNT_FORMS = {'signup': 'news.forms.BasicSignupForm'}"""

    username = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Номер телефона'}),
        label='Номер телефона',
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



#todo у учетом наличия сильного фронтэндера, все формы можно перенести на html. Въюшки будут лишь проверять и создавать
# объекты в бд.
class FirstLastNameEdit(ModelForm):

    first_name = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Ваше имя'}),
        label='Имя',
        validators=[no_number_in_name],
        required=True,
    )
    last_name = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Ваша фамилия'}),
        label='Фамилия',
        validators=[no_number_in_name],
        required=True,
    )

    class Meta:
        model = User
        fields = ('first_name', 'last_name')


class SurnameEdit(ModelForm):
    surname = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Ваше Отчество(необязательно)'}),
        label='Отчество',
        validators=[no_number_in_name],
        required=False,
    )

    class Meta:
        model = Profile
        fields = ('surname', )


class BirthDateEdit(ModelForm):
    birth_date = forms.DateField(
        label='Дата рождения',
        widget=SelectDateWidget(years=years_range()),
    )

    class Meta:
        model = Profile
        fields = ('birth_date', )


class MobileNuberEdit(ModelForm):
    """Для выполнения условия входа путем ввода как email так и по телефону,
    с учетом, что настройках allauth можно прописать лишь
    ACCOUNT_AUTHENTICATION_METHOD = 'username_email',
    пришлось поле username неявно переделать в телефон."""
    username = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Номер телефона'}),
        label='Контактный номер',
        max_length=12,
        required=True,
        validators=[phone_regex],
        error_messages={
            "unique": "Пользователь с таким номером уже зарегистрирован",
        },
    )

    class Meta:
        model = User
        fields = ('username', )


from django.core.validators import validate_email


class EmailEdit(ModelForm):
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'placeholder': 'Email'}),
        label='Email',
        required=True,
        validators=[validate_email],
    )

    class Meta:
        model = User
        fields = ('email', )


