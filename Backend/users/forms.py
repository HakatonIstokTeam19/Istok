from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile
from .validations import *

from allauth.account.forms import SignupForm
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
    first_name = forms.CharField(label="Имя", required=True)
    last_name = forms.CharField(label="Фамилия", required=True)
    surname = forms.CharField(label="Отчество", required=False)
    birth_date = forms.DateField(label='Дата рождения', widget=SelectDateWidget(years=years_range()))
    mailing = forms.BooleanField(label='Согласие на рассылку новостей', required=False)

    personal_data_processing = forms.BooleanField(label='Согласие на обработку персональных данных', required=False)
    children_having = forms.BooleanField(label='Есть ли у Вас дети?', required=False)
    repair_planing_time = forms.ChoiceField(choices=Profile.PLANING_TIME, label='Когда планируется ремонт?')
    f_kitchen = forms.BooleanField(label='Кухня', required=False)
    f_wardrobe = forms.BooleanField(label='Гардероб', required=False)
    f_hallway = forms.BooleanField(label='Прихожая', required=False)
    f_rack = forms.BooleanField(label='Стеллаж', required=False)
    f_dresser = forms.BooleanField(label='Комод', required=False)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'surname', 'birth_date', 'username', 'email', 'password1', 'password2',
                  'mailing', 'personal_data_processing', 'repair_planing_time',
                  'f_kitchen', 'f_wardrobe', 'f_hallway', 'f_rack', 'f_dresser', 'children_having')


    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


    def save(self, request):
        user = super().save(request)
        data = self.cleaned_data
        try:
            Profile.objects.create(surname=data.get('surname'), user=user, birth_date=data.get('birth_date'),
                repair_planing_time=data.get('repair_planing_time'), f_kitchen=data.get('f_kitchen'),
                f_wardrobe=data.get('f_wardrobe'), f_hallway=data.get('f_hallway'), f_rack=data.get('f_rack'),
                f_dresser=data.get('f_dresser'), mailing=data.get('mailing'),
                personal_data_processing=data.get('personal_data_processing'),
                children_having=data.get('children_having'))

        except Exception as e:
            print(f'\n\n!!! НЕИЗВЕТСНАЯ ОШИБКА СОЗДАНИЯ ПРОФИЛЯ!!!\n cleaned_data == {data}\n{e}')

        return user











# class UserRegisterForm(UserCreationForm):
#
#     first_name = forms.CharField(label='Имя')
#     last_name = forms.CharField(label='Фамилия')
#     email = forms.EmailField(required=True, label='Электронная почта')
#
#     def clean(self):
#         # удаляет возможные пробелы в ф.и.о.
#         cleaned_data = super().clean()
#         cleaned_data["first_name"] = cleaned_data.get("first_name").strip()
#         cleaned_data["last_name"] = cleaned_data.get("last_name").strip()
#         return cleaned_data
#
#     class Meta:
#         model = User
#         fields = ['first_name', 'last_name', 'email', 'password1', 'password2']
#
#     def save(self, commit=True):
#
#         user = super().save(commit=False)
#         user.set_password(self.cleaned_data["password1"])
#         print(user)
#         if commit:
#             user.save()
#         return user


# class ProfileRegisterForm(forms.ModelForm):
#
#
#     surname = forms.CharField(label='Отчество (при наличии)', required=False)
#
#     birth_date = forms.DateField(label='Дата рождения', widget=SelectDateWidget(years=YEARS))
#     mailing = forms.BooleanField(label='Согласие на рассылку новостей', required=False)
#     personal_data_processing = forms.BooleanField(label='Согласие на обработку персональных данных', required=False)
#     children_having = forms.BooleanField(label='Есть ли у Вас дети?', required=False)
#
#     def clean(self):
#         cleaned_data = super().clean()
#         cleaned_data["surname"] = cleaned_data.get("surname").strip()
#         return cleaned_data
#
#
#
#     class Meta:
#         model = Profile
#         fields = ['surname', 'birth_date', 'repair_planing_time',
#                 'mailing', 'personal_data_processing', 'children_having']




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









