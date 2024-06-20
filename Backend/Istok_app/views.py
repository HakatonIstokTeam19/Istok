from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from django_filters.views import FilterView

from Istok_app.filters import FinishedFurnitureFilter
from .models import Orders, Finished_furniture, Application
from .forms import OrdersCreateForm, Finished_furnitureCreateForm, ApplicationCreateForm


def home(request):
    return render(request, 'Istok_app/home.html')


def about(request):
    return render(request, 'Istok_app/about.html')


class Finished_furnitureList(FilterView):
    model = Finished_furniture
    filterset_class = FinishedFurnitureFilter
    template_name = 'Istok_app/finished_furniture_list.html'
    context_object_name = 'finished_furniture_list'
    paginate_by = 5

class Finished_furnitureDetail(DetailView):
    model = Finished_furniture
    template_name = 'Istok_app/finished_furniture_detail.html'
    context_object_name = 'finished_furniture_detail'


class Finished_furnitureCreate(LoginRequiredMixin, CreateView):
    raise_exception = False
    form_class = Finished_furnitureCreateForm
    model = Finished_furniture
    template_name = 'Istok_app/finished_furniture_edit.html'
    success_url = reverse_lazy('finished_furniture_list')

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class Finished_furnitureUpdate(LoginRequiredMixin, UpdateView):
    raise_exception = False
    form_class = Finished_furnitureCreateForm
    model = Finished_furniture
    template_name = 'Istok_app/finished_furniture_edit.html'
    success_url = reverse_lazy('finished_furniture_list')

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        if 'delete' in request.POST and self.request.user.is_staff:
            self.object = self.get_object()
            self.object.delete()
            return redirect(self.get_success_url())
        return super().post(request, *args, **kwargs)


class ApplicationCreate(CreateView):
    raise_exception = False
    form_class = ApplicationCreateForm
    model = Application
    template_name = 'Istok_app/application_edit.html'
    success_url = reverse_lazy('application_accept')

    def form_valid(self, form):
        slider_value = self.request.POST.get('slider')
        if slider_value == '100':
            return super().form_valid(form)
        else:
            messages.error(self.request, 'Передвиньте ползунок вправо для подтверждения, что вы человек.')
            return self.form_invalid(form)

def application_accept(request):
    return render(request, 'Istok_app/application_accept.html')

class OrdersList(LoginRequiredMixin, ListView):
    model = Orders
    ordering = '-order_date'
    template_name = 'Istok_app/orders_list.html'
    context_object_name = 'orders_list'
    paginate_by = 5


class OrdersDetail(LoginRequiredMixin, DetailView):
    model = Orders
    template_name = 'Istok_app/order.html'
    context_object_name = 'orders'


class OrdersCreate(LoginRequiredMixin, CreateView):
    raise_exception = False
    # permission_required = ('Istok_app.add_order',)
    form_class = OrdersCreateForm
    model = Orders
    template_name = 'Istok_app/orders_edit.html'
    success_url = reverse_lazy('orders_list')