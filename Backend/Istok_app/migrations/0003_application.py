# Generated by Django 5.0.6 on 2024-06-20 19:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Istok_app', '0002_finished_furniture_alter_orders_order_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, choices=[('1', 'Кухня'), ('2', 'Гардероб'), ('3', 'Прихожая'), ('4', 'Комод'), ('5', 'Стеллаж'), ('6', 'Комплексный заказ')], default=None, max_length=1, null=True, verbose_name='Тип мебели')),
                ('form', models.CharField(blank=True, choices=[('1', 'Прямая'), ('2', 'П-образная'), ('3', 'Угловая'), ('4', 'Г-образная')], default=None, max_length=1, null=True, verbose_name='Форма мебели')),
                ('addition', models.CharField(blank=True, choices=[('1', 'Барная стойка'), ('2', 'Остров'), ('3', 'Без дополнений')], default=None, max_length=1, null=True, verbose_name='Дополнения')),
                ('facades_material', models.CharField(blank=True, choices=[('1', 'ЛДСП'), ('2', 'Пленка ПВХ'), ('3', 'Пластик AGT'), ('4', 'Пластик Fenix'), ('5', 'Эмаль')], default=None, max_length=1, null=True, verbose_name='Материал фасада')),
                ('table_material', models.CharField(blank=True, choices=[('1', 'Столешница компакт-ламинат'), ('2', 'Кварцевая столешница'), ('3', 'Столешница ЛДСП с покрытием HPL'), ('4', 'Акриловая столешница')], default=None, max_length=1, null=True, verbose_name='Материал столешницы')),
                ('plumb', models.CharField(blank=True, choices=[('1', 'Необходим подбор сантехники'), ('2', 'Подбор сантехники не нужен')], default=None, max_length=1, null=True, verbose_name='Кухонная сантехника')),
                ('appliances', models.CharField(blank=True, choices=[('1', 'Необходим подбор техники'), ('2', 'Подбор техники не нужен')], default=None, max_length=1, null=True, verbose_name='Бытовая техника')),
                ('budget', models.CharField(blank=True, choices=[('1', 'до 300 000 ₽'), ('2', 'от 300 000 ₽ до 500 000 ₽'), ('3', 'от 500 000 ₽ до 700 000 ₽'), ('4', 'от 700 000 ₽')], default=None, max_length=1, null=True, verbose_name='Бюджет проекта')),
                ('consultation', models.CharField(blank=True, choices=[('1', 'Консультация нужна'), ('2', 'Консультация не нужна')], default=None, max_length=1, null=True, verbose_name='Консультация с экспертом по обустройству дома')),
                ('last_name', models.CharField(max_length=150, verbose_name='Фамилия')),
                ('first_name', models.CharField(max_length=150, verbose_name='Имя')),
                ('patronymic', models.CharField(blank=True, max_length=150, null=True, verbose_name='Отчество')),
                ('phone', models.CharField(max_length=12, validators=[django.core.validators.RegexValidator(message="Телефон должен быть указан в формате: '+7ХХХХХХХХХХ'. Максимум 12 символов.", regex='^\\+?1?\\d{9,12}$')], verbose_name='Ваш номер телефона')),
                ('connection', models.CharField(choices=[('1', 'Звонок'), ('2', 'Telegram'), ('3', 'ВКонтакте')], default=None, max_length=1, verbose_name='Как с Вами связаться?')),
                ('link', models.CharField(blank=True, max_length=150, null=True, verbose_name='Ваша ссылка на Telegram/ВКонтакте')),
                ('data', models.CharField(blank=True, max_length=30, null=True, verbose_name='Дата')),
                ('time', models.CharField(blank=True, max_length=30, null=True, verbose_name='Время')),
            ],
        ),
    ]
