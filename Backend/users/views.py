from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm, ProfileRegisterForm
from random import randint
from django.contrib.auth.models import User
from .models import Profile


def register(request):
    if request.method == 'POST':
        u_form = UserRegisterForm(request.POST)
        p_form = ProfileRegisterForm(request.POST)
        username = f"{request.POST.get('first_name')}{request.POST.get('last_name')}{request.POST.get('surname')}"

        if u_form.is_valid() and p_form.is_valid():
            new_user = u_form.save(commit=False)
            # Проверка на наличие полной тезки. В положительном случае генерирует для username рандомный айди до 300.
            if User.objects.filter(username__iexact=username).exists():
                while True:
                    username = f"{username}{randint(1, 300)}"
                    if not User.objects.filter(username__iexact=username).exists():
                        new_user.username = username
                        new_user = u_form.save()
                        break

            else:
                u_form.cleaned_data['username'] = username
                new_user = u_form.save()

            Profile.objects.filter(user=new_user).update(**p_form.cleaned_data)


            messages.success(request, f'Ваш аккаунт создан: можно войти на сайт.')
            return redirect('login')
    else:
        u_form = UserRegisterForm()
        p_form = ProfileRegisterForm()

    context = {'u_form': u_form, 'p_form': p_form}
    return render(request, 'users/register.html', context=context)


@login_required
def profile(request):
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST,
            request.FILES,
            instance=request.user.profile)
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f'Ваш профиль успешно обновлен.')
            return redirect('profile')

    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'u_form': u_form,
        'p_form': p_form
    }

    return render(request, 'users/profile.html', context)
