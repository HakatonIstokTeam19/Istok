from django.urls import path, include, re_path
# from django.contrib.auth import views as auth_views
# from users import views as user_views

from . import views
from allauth.account import views as allauth_view


urlpatterns = [
    path('profile/', views.profile, name='profile'),
    path('signup/', views.signup, name='signup'),
    path('logout/', views.logout, name='logout'),  # без шаблона
    path('login/', views.login, name='login'),
    path('email_verification_sent/', views.email_verification_sent, name="account_email_verification_sent",),
    path('password_reset/', views.password_reset, name='password_reset'),
    path('password_reset_done/<str:for_email>/', views.password_reset_done, name='password_reset_done'),

    re_path(
        r"^accounts/password/reset/key/(?P<uidb36>[0-9A-Za-z]+)-(?P<key>.+)/$",
        views.password_reset_from_key,
        name="account_reset_password_from_key",
    ),

    path('password_reset_from_key_done/', views.password_reset_from_key_done, name='password_reset_from_key_done'),
    path('accounts/confirm-email/', views.email_verification_sent, name='confirm-email'),
    re_path(
        r"^accounts/confirm-email/(?P<key>[-:\w]+)/$",
        views.confirm_email,
        name="account_confirm_email",
    ),
    path('loyalty_start/', views.loyalty_start, name='loyalty_start'),
    path('loyalty_next/', views.loyalty_next, name='loyalty_next'),

    # allauth все стандартные пути. если нет кастомной въюшки будет работать оригинал.
    path('accounts/', include('allauth.urls')),

    ####### для тестирования html
    path('test/', views.form_for_test, name='test'),
    #######
]





