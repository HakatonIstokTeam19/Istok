from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile
from django.core.validators import RegexValidator

from allauth.account.forms import SignupForm
from django.contrib.auth.validators import UnicodeUsernameValidator

from django.forms import SelectDateWidget
from datetime import datetime


phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,12}$',
        message="Телефон должен быть указан в формате: "
                                         "'+7ХХХХХХХХХХ'. Максимум 12 символов.")

current_year = int(datetime.now().year)
YEARS = [(current_year - 90) + x for x in range(1, 80)]


class UserRegisterForm(UserCreationForm):

    first_name = forms.CharField(label='Имя')
    last_name = forms.CharField(label='Фамилия')
    email = forms.EmailField(required=True, label='Электронная почта')

    def clean(self):
        # удаляет возможные пробелы в ф.и.о.
        cleaned_data = super().clean()
        cleaned_data["first_name"] = cleaned_data.get("first_name").strip()
        cleaned_data["last_name"] = cleaned_data.get("last_name").strip()
        return cleaned_data

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password1', 'password2']

    def save(self, commit=True):

        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        print(user)
        if commit:
            user.save()
        return user


class ProfileRegisterForm(forms.ModelForm):


    surname = forms.CharField(label='Отчество (при наличии)', required=False)

    birth_date = forms.DateField(label='Дата рождения', widget=SelectDateWidget(years=YEARS))
    mailing = forms.BooleanField(label='Согласие на рассылку новостей', required=False)
    personal_data_processing = forms.BooleanField(label='Согласие на обработку персональных данных', required=False)
    children_having = forms.BooleanField(label='Есть ли у Вас дети?', required=False)

    def clean(self):
        cleaned_data = super().clean()
        cleaned_data["surname"] = cleaned_data.get("surname").strip()
        return cleaned_data



    class Meta:
        model = Profile
        fields = ['surname', 'birth_date', 'repair_planing_time',
                'mailing', 'personal_data_processing', 'children_having']




# class UserUpdateForm(forms.ModelForm):
#     email = forms.EmailField()
#
#
#     class Meta:
#         model = User
#         fields = ['username', 'email']
#
#
# class ProfileUpdateForm(forms.ModelForm):
#     class Meta:
#         model = Profile
#         fields = ['birth_date', 'phone']


class BasicSignupForm(SignupForm):
    """Форма дополняющая регистрационную форму allauth новыми полями.
    Необходимо прописать путь в настройкахACCOUNT_FORMS = {'signup': 'news.forms.BasicSignupForm'}"""
    # email = forms.EmailField(label="Email")
    username_validator = UnicodeUsernameValidator()
    username = forms.CharField(
        label='Контактный номер',
        max_length=12,
        required=True,
        validators=[phone_regex],
        error_messages={
            "unique": "Пользователь с таким номером уже зарегистрирован",
        },
    )
    full_nane = forms.CharField(label="Ф.И.О.", required=True)
    birth_date = forms.DateField(label='Дата рождения', widget=SelectDateWidget(years=YEARS))
    repair_planing = forms.BooleanField(label='Планируете ли Вы ремонт?', required=False)
    mailing = forms.BooleanField(label='Согласие на рассылку новостей', required=False)
    personal_data_processing = forms.BooleanField(label='Согласие на обработку персональных данных', required=False)
    children_having = forms.BooleanField(label='Есть ли у Вас дети?', required=False)

    repair_planing_time = forms.ChoiceField(choices=Profile.PLANING_TIME,
                                           label='Когда планируется ремонт?')

    f_kitchen = forms.BooleanField(label='Кухня', required=False)
    f_wardrobe = forms.BooleanField(label='Гардероб', required=False)
    f_hallway = forms.BooleanField(label='Прихожая', required=False)
    f_rack = forms.BooleanField(label='Стеллаж', required=False)
    f_dresser = forms.BooleanField(label='Комод', required=False)

    class Meta:
        model = User
        fields = ('full_nane', 'birth_date', 'username', 'email', 'password1', 'password2',
                  'mailing', 'personal_data_processing',
                  'repair_planing_time', 'f_kitchen', 'f_wardrobe', 'f_hallway', 'f_rack', 'f_dresser',
                  'children_having')


    def try_save(self, request):
        user, resp = super().try_save(request=request)
        return user, resp


    def save(self, request):
        # Автоматически добавляет всех пользователей в группу common
        user = super(BasicSignupForm, self).save(request)
        return user


















