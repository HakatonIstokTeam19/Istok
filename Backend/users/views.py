from django.shortcuts import render, redirect, get_object_or_404

from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserChangeForm, PasswordChangeForm

from django.urls import reverse, reverse_lazy
from django.views.generic.base import TemplateView
from django.views.generic import (ListView, DetailView, CreateView,
                                  UpdateView, DeleteView, View)

from .forms import (CustomSignupForm, FirstLastNameEdit, SurnameEdit,
                    BirthDateEdit, MobileNuberEdit, EmailEdit)
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
        ret['form'].fields['login'].label = 'Email или номер телефона'
        ret['form'].fields['password'].label = 'Пароль'
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



@login_required
def profile(request):
    user = get_object_or_404(User, pk=request.user.pk)
    profile = get_object_or_404(Profile, user=user)

    try:
        user_loyalty = user.loyalty.loyalty_code
    except Exception:
        user_loyalty = ''

    fio = f"{user.last_name.capitalize()} {user.first_name.capitalize()} {profile.surname.capitalize()}"
    num = user.username

    if num[0] == '+':
        mobile_number = f"+{num[1]}({num[2:5]}) {num[5:8]}-{num[8:10]}-{num[10:12]}"
    else:
        mobile_number = num

    form_first_last_name = FirstLastNameEdit(instance=user)
    form_surname = SurnameEdit(instance=profile)
    form_birth_day = BirthDateEdit(instance=profile)
    form_mobile_number = MobileNuberEdit(instance=user)

    form_email = EmailEdit(instance=user)
    form_email.fields['email'].widget.attrs.update({'placeholder': 'Email'})

    form_password = PasswordChangeForm(user=user)
    form_password.fields['old_password'].widget.attrs.update({'placeholder': 'Старый пароль'})
    form_password.fields['new_password1'].widget.attrs.update({'placeholder': 'Новый пароль'})
    form_password.fields['new_password2'].widget.attrs.update({'placeholder': 'Повторите новый пароль'})

    data = request.POST
    print('data == ', data)

    #####
    lst = [form_first_last_name, form_surname, form_birth_day, form_mobile_number, form_email, form_password]
    # for form in lst:
    #     print(form.fields)
    ######
    # print('form_first_last_name == ', form_first_last_name.fields['first_name'])


    if request.method == "POST":

        if data.get('last_name'):
            form_first_last_name = FirstLastNameEdit(instance=user, data=data)
        else:
            form_first_last_name = FirstLastNameEdit(instance=user)

        if data.get('surname'):
            form_surname = SurnameEdit(instance=profile, data=data)
        else:
            form_surname = SurnameEdit(instance=profile)

        if data.get('birth_date'):
            form_birth_day = BirthDateEdit(instance=profile, data=data)
        else:
            form_birth_day = BirthDateEdit(instance=profile)

        if data.get('username'):
            form_mobile_number = MobileNuberEdit(instance=user, data=data)
        else:
            form_mobile_number = MobileNuberEdit(instance=user)

        if data.get('email'):
            form_email = EmailEdit(instance=user, data=data)
        else:
            form_email = EmailEdit(instance=user)

        if data.get('old_password'):
            form_password = PasswordChangeForm(user=user, data=data)
        else:
            form_password = PasswordChangeForm(user=user)



        if form_first_last_name.is_valid() and form_surname.is_valid() and data.get('last_name'):
            form_first_last_name.save()
            form_surname.save()
            print('\nform_first_last_name and form_surname SAVED\n')
            return redirect('profile')

        if form_birth_day.is_valid() and data.get('birth_date'):
            form_birth_day.save()
            print('\nform_birth_day SAVED\n')
            return redirect('profile')

        if form_mobile_number.is_valid() and data.get('username'):
            form_mobile_number.save()
            print('\nform_mobile_number SAVED\n')
            return redirect('profile')

        if form_email.is_valid() and data.get('email'):
            form_email.save()
            print('\nform_email SAVED\n')
            return redirect('profile')

        if form_password.is_valid() and data.get('old_password'):
            form_password.save()
            print('\nform_password SAVED\n')
            # Автоматическая авторизация после заполнения формы
            update_session_auth_hash(request, user)
            return redirect('profile')

        print('\nЧто-то не валидно!!!!\n')

    context = {'user': user, 'user_loyalty': user_loyalty, 'profile': profile,
               'mobile_number': mobile_number, 'fio': fio,
               'form_first_last_name': form_first_last_name, 'form_surname': form_surname,
               'form_birth_day': form_birth_day, 'form_mobile_number': form_mobile_number,
               'form_email': form_email, 'form_password': form_password}

    return render(request, 'users/profile.html', context=context)




#########
class FormForTest(TemplateView):
    template_name = "users/profile.html"


form_for_test = FormForTest.as_view()
###########




