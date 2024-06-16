from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.urls import reverse, reverse_lazy

from django.contrib.auth.models import User
from .forms import CustomSignupForm
from .models import Profile

from allauth.account.views import (SignupView, LogoutView, LoginView, PasswordResetView, PasswordResetDoneView)



class CustomSignupView(SignupView):
    template_name = 'users/signup.html'
    form_class = CustomSignupForm

    def get_context_data(self, **kwargs):
        """Изменяет в готовой форме нужные поля. Такие, как placeholder, label и тд."""
        ret = super().get_context_data()
        # ret['form'].fields['login'].widget.attrs.update({'placeholder': 'Email или номер телефона'})
        # ret['form'].fields['password'].widget.attrs.update({'placeholder': 'Пароль кастом вид'})
        # ret['form'].fields['login'].label = ''
        # ret['form'].fields['password'].label = ''
        return ret


signup = CustomSignupView.as_view()


class CustomLogoutView(LogoutView):
    def get(self, *args, **kwargs):
        return super(CustomLogoutView, self).post(*args, **kwargs)


logout = CustomLogoutView.as_view()


class CustomLoginView(LoginView):
    template_name = "users/login.html"

    def get_context_data(self, **kwargs):
        """Изменяет в готовой форме нужные поля. Такие, как placeholder, label и тд."""
        ret = super().get_context_data()
        ret['form'].fields['login'].widget.attrs.update({'placeholder': 'Email или номер телефона'})
        ret['form'].fields['password'].widget.attrs.update({'placeholder': 'Пароль кастом вид'})
        ret['form'].fields['login'].label = ''
        ret['form'].fields['password'].label = ''
        return ret


login = CustomLoginView.as_view()



class CustomPasswordResetView(PasswordResetView):
    template_name = "users/password_reset.html"
    success_url = reverse_lazy("account_reset_password_done")

password_reset = CustomPasswordResetView.as_view()
# accounts/password/change/


class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = "user/password_reset_done.html"


password_reset_done = CustomPasswordResetDoneView.as_view()


# accounts/password/reset/done/
# views.password_set

# < div >
# < label
# for ="id_login" > Войти:< / label >
#
# < input
# type = "text"
# name = "login"
# placeholder = "Email или номер телефона"
# autocomplete = "email"
# label = "None"
# required
# id = "id_login" >
#
# < / div >
#
# < div >
# < label
# for ="id_password" > Пароль:< / label >
