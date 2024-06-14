from django.urls import path, include
from django.contrib.auth import views as auth_views
from users import views as user_views
from . import views

from allauth.account import views as allauth_view


urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('logout/', views.logout, name='logout'),
    path('login/', views.login, name='login'),
    # path('accounts/logout/', views.logout, name='account_logout'),
    # path('accounts/logout/', views.logout, name='account_logout'),
    # path('accounts/logout/', views.logout, name='account_logout'),
    # path('accounts/logout/', views.logout, name='account_logout'),
    # path('accounts/logout/', views.logout, name='account_logout'),
    # path('accounts/logout/', views.logout, name='account_logout'),
    # path('accounts/logout/', views.logout, name='account_logout'),
    # allauth
    path('accounts/', include('allauth.urls')),
]

# accounts/ login/ [name='account_login']
# accounts/ inactive/ [name='account_inactive']
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
