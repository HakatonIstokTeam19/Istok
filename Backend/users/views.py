from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from django.contrib.auth.models import User
from .forms import CustomSignupForm
from .models import Profile

from allauth.account.views import SignupView, LogoutView, LoginView



class CustomSignupView(SignupView):
    template_name = 'users/registration.html'
    form_class = CustomSignupForm

signup = CustomSignupView.as_view()


class CustomLogoutView(LogoutView):
    def get(self, *args, **kwargs):
        return super(CustomLogoutView, self).post(*args, **kwargs)


logout = CustomLogoutView.as_view()


class CustomLoginView(LoginView):
    template_name = "users/login.html"

    # def get_context_data(self, **kwargs):
    #     ret = super().get_context_data()
    #     # ret['form'].fields['login'].widget.attrs.update({'placeholder': 'Email или номер телефона'})
    #     return ret


login = CustomLoginView.as_view()





