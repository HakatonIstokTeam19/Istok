# -*- coding: utf-8 -*-
import os
import sys

sys.path.insert(0, '/var/www/u2728036/data/www/leshiy.fun/Istok/Backend')
sys.path.insert(1, '/var/www/u2728036/data/www/leshiy.fun/Istok/Backend/venv/lib/python3.10/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'Istok.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
