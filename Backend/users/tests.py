from django.test import TestCase
from datetime import datetime
import random

dct = ''.join([str(random.randint(0, 9)) for _ in range(4)])

print(dct)
