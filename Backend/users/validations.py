from datetime import datetime
from django.core.validators import RegexValidator

phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,12}$',
        message="Телефон должен быть указан в формате: "
                                         "'+7ХХХХХХХХХХ'. Максимум 12 символов.")

def years_range():
    current_year = int(datetime.now().year)
    YEARS = [(current_year - 90) + x for x in range(1, 80)]
    return YEARS
