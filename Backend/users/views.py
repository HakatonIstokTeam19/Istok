from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.urls import reverse, reverse_lazy
# from django.utils.decorators import method_decorator
from django.views.generic.base import TemplateView

from django.contrib.auth.models import User
from .forms import CustomSignupForm
from .models import Profile

from allauth.account.views import (SignupView, LogoutView, LoginView, PasswordResetView, PasswordResetDoneView,
                                   PasswordResetFromKeyView, PasswordResetFromKeyDoneView, EmailVerificationSentView,
                                   ConfirmEmailView)








class CustomSignupView(SignupView):
    """Регистрация: шаг 1 и 2"""
    template_name = 'users/signup.html'
    form_class = CustomSignupForm

    def get_context_data(self, **kwargs):
        """Изменяет в готовой форме нужные поля. Такие, как placeholder, label и тд."""
        ret = super().get_context_data()
        return ret

    def get_success_url(self):
        url = super(CustomSignupView, self).get_success_url()
        print('url === ', url)
        return url

signup = CustomSignupView.as_view()


class CustomEmailVerificationSentView(EmailVerificationSentView):
    """Регистрация: шаг 3, подтверждение email"""
    template_name = "users/verification_sent.html"


    def get_redirect_url(self):
        url = 'users/login.html'
        return url


email_verification_sent = CustomEmailVerificationSentView.as_view()


class CustomConfirmEmailView(ConfirmEmailView):
    template_name = "users/email_confirm.html"


    def get_redirect_url(self):
        url = super(CustomConfirmEmailView, self).get_redirect_url()
        url = 'login'
        return url


confirm_email = CustomConfirmEmailView.as_view()



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
        ret['form'].fields['password'].widget.attrs.update({'placeholder': 'Пароль'})
        ret['form'].fields['login'].label = ''
        ret['form'].fields['password'].label = ''
        return ret


login = CustomLoginView.as_view()



class CustomPasswordResetView(PasswordResetView):

    template_name = "users/password_reset.html"


    def get_context_data(self, **kwargs):
        ret = super().get_context_data()
        ret['form'].fields['email'].widget.attrs.update({'placeholder': 'Email'})
        return ret

    def form_valid(self, form):
        ret = super(CustomPasswordResetView, self).form_valid(form)
        return ret

    def get_form_kwargs(self):
        kwargs = super(CustomPasswordResetView, self).get_form_kwargs()
        return kwargs

    def get_success_url(self):
        for_email = self.get_form_kwargs().get('data').get('email')
        url = '/password_reset_done/' + for_email + '/'
        return url


password_reset = CustomPasswordResetView.as_view()


class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = "users/password_reset_done.html"


password_reset_done = CustomPasswordResetDoneView.as_view()



class CustomPasswordResetFromKeyView(PasswordResetFromKeyView):
    template_name = 'users/password_reset_from_key.html'
    success_url = reverse_lazy("password_reset_from_key_done")

    def get_context_data(self, **kwargs):
        ret = super(CustomPasswordResetFromKeyView, self).get_context_data(**kwargs)
        print('ret from CustomPasswordResetFromKeyView === ', ret)
        return ret


password_reset_from_key = CustomPasswordResetFromKeyView.as_view()


class CustomPasswordResetFromKeyDoneView(PasswordResetFromKeyDoneView):
    template_name = 'users/password_reset_from_key_done.html'


password_reset_from_key_done = CustomPasswordResetFromKeyDoneView.as_view()



