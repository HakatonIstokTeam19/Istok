from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile


class UserRegisterForm(UserCreationForm):

    PLANING_TIME = [
        ('1', 'Уже идет'),
        ('2', 'Скоро приступаем'),
        ('3', 'В течение полугода'),
        ('4', 'В течение года')
    ]
    MEBEL_TYPE = [
        ('1', 'Кухня'),
        ('2', 'Гардероб'),
        ('3', 'Прихожая'),
        ('4', 'Стелаж'),
        ('5', 'Комод')
    ]

    username = forms.CharField(label='Ф.И.О.')
    birth_date = forms.DateField(label='Дата рождения')
    phone = forms.CharField(label='Телефон', max_length=12, required=True,
                            help_text='Номер телефона в формате +7ХХХХХХХХХХ')
    email = forms.EmailField()
    repair_planing = forms.BooleanField(label='Планируете ли Вы ремонт?')
    repair_planing_time = forms.TypedMultipleChoiceField(label='Когда планируется ремонт?', choices=PLANING_TIME)
    mebel_type = forms.TypedMultipleChoiceField(label='Какая мебель понадобится?', choices=MEBEL_TYPE)
    mailing = forms.BooleanField(label='Согласие на рассылку новостей')
    personal_data_processing = forms.BooleanField(label='Согласие на обработку персональных данных')
    children_having = forms.BooleanField(label='Есть ли у Вас дети?')


    class Meta:
        model = User
        fields = ['username', 'birth_date', 'phone', 'email', 'password1', 'password2', 'repair_planing',
                  'repair_planing_time', 'mebel_type', 'mailing', 'personal_data_processing', 'children_having']


class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()


    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['birth_date', 'phone']