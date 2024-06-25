from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from django_filters.views import FilterView

from Istok_app.filters import FinishedFurnitureFilter
from .models import Finished_furniture, Application, Orders, Parts
from .forms import Finished_furnitureCreateForm, ApplicationCreateForm, OrdersCreateForm, PartsCreateForm


def home(request):
    return render(request, 'Istok_app/home.html')


def about(request):
    return render(request, 'Istok_app/about.html')


class Finished_furnitureList(FilterView):
    model = Finished_furniture
    filterset_class = FinishedFurnitureFilter
    template_name = 'Istok_app/finished_furniture_list.html'
    context_object_name = 'finished_furniture_list'


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


def application_create(request):
    return render(request, 'Istok_app/application_edit.html')

def application_skip_selection(request):
    return render(request, 'Istok_app/application_skip_selection.html')

def application_accept(request):
    if request.method == 'GET':
        application_data = request.GET.dict()

        application = Application(
            type=application_data.get('type', ''),
            form=application_data.get('form', ''),
            addition=application_data.get('addition', ''),
            facades_material=application_data.get('facades_material', ''),
            table_material=application_data.get('table_material', ''),
            plumb=application_data.get('plumb', ''),
            appliances=application_data.get('appliances', ''),
            budget=application_data.get('budget', ''),
            consultation=application_data.get('consultation', ''),
            last_name=application_data.get('last_name', ''),
            first_name=application_data.get('first_name', ''),
            patronymic=application_data.get('patronymic', ''),
            phone=application_data.get('phone', ''),
            connection=application_data.get('connection', ''),
            link=application_data.get('link', ''),
            data=application_data.get('data', ''),
            time=application_data.get('time', ''),
        )
        application.save()

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
    form_class = OrdersCreateForm
    model = Orders
    template_name = 'Istok_app/orders_edit.html'
    success_url = reverse_lazy('orders_list')

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class OrdersUpdate(LoginRequiredMixin, UpdateView):
    raise_exception = False
    form_class = OrdersCreateForm
    model = Orders
    template_name = 'Istok_app/orders_edit.html'
    success_url = reverse_lazy('orders_list')

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        if 'delete' in request.POST and self.request.user.is_staff:
            self.object = self.get_object()
            self.object.delete()
            return redirect(self.get_success_url())
        return super().post(request, *args, **kwargs)

class PartsList(LoginRequiredMixin, ListView):
    model = Parts
    ordering = 'parts_name'
    template_name = 'Istok_app/parts_list.html'
    context_object_name = 'parts_list'
    paginate_by = 10

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

class PartsDetail(LoginRequiredMixin, DetailView):
    model = Parts
    template_name = 'Istok_app/parts.html'
    context_object_name = 'parts'

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class PartsCreate(LoginRequiredMixin, CreateView):
    raise_exception = False
    form_class = PartsCreateForm
    model = Parts
    template_name = 'Istok_app/parts_edit.html'
    success_url = reverse_lazy('parts_list')

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class PartsUpdate(LoginRequiredMixin, UpdateView):
    raise_exception = False
    form_class = PartsCreateForm
    model = Parts
    template_name = 'Istok_app/parts_edit.html'
    success_url = reverse_lazy('parts_list')

    @method_decorator(staff_member_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        if 'delete' in request.POST and self.request.user.is_staff:
            self.object = self.get_object()
            self.object.delete()
            return redirect(self.get_success_url())
        return super().post(request, *args, **kwargs)