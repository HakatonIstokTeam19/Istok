from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

from django.forms import SelectDateWidget
from datetime import datetime

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


class ProfileRegisterForm(forms.ModelForm):


    surname = forms.CharField(label='Отчество (при наличии)', required=False)

    birth_date = forms.DateField(label='Дата рождения', widget=SelectDateWidget(years=YEARS))
    phone = forms.CharField(label='Телефон', max_length=12, required=True,
                            help_text='Номер телефона в формате +7ХХХХХХХХХХ')
    repair_planing = forms.BooleanField(label='Планируете ли Вы ремонт?', required=False)
    mailing = forms.BooleanField(label='Согласие на рассылку новостей', required=False)
    personal_data_processing = forms.BooleanField(label='Согласие на обработку персональных данных', required=False)
    children_having = forms.BooleanField(label='Есть ли у Вас дети?', required=False)

    def clean(self):
        cleaned_data = super().clean()
        cleaned_data["surname"] = cleaned_data.get("surname").strip()
        return cleaned_data



    class Meta:
        model = Profile
        fields = ['surname', 'birth_date', 'phone', 'repair_planing', 'repair_planing_time',
                  'furniture_type', 'mailing', 'personal_data_processing', 'children_having']




class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()


    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['birth_date', 'phone']
