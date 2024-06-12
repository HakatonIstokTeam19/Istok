from django.urls import path, include
from django.contrib.auth import views as auth_views
from users import views as user_views
from .views import *

urlpatterns = [
    path('register/', user_views.register, name='register'),
    path('profile/', user_views.profile, name='profile'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    # path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    # allauth
    path('accounts/', include('allauth.urls')),
]

# admin/
# register/ [name='register']
# profile/ [name='profile']
# accounts/ login/ [name='account_login']
# accounts/ logout/ [name='account_logout']
# accounts/ inactive/ [name='account_inactive']
# accounts/ signup/ [name='account_signup']
# accounts/ reauthenticate/ [name='account_reauthenticate']
# accounts/ email/ [name='account_email']
# accounts/ confirm-email/ [name='account_email_verification_sent']
# accounts/ ^confirm-email/(?P<key>[-:\w]+)/$ [name='account_confirm_email']
# accounts/ password/change/ [name='account_change_password']
# accounts/ password/set/ [name='account_set_password']
# accounts/ password/reset/ [name='account_reset_password']
# accounts/ password/reset/done/ [name='account_reset_password_done']
# accounts/ ^password/reset/key/(?P<uidb36>[0-9A-Za-z]+)-(?P<key>.+)/$ [name='account_reset_password_from_key']
# accounts/ password/reset/key/done/ [name='account_reset_password_from_key_done']
# [name='home']
# about/ [name='about']
# ^media/(?P<path>.*)$
