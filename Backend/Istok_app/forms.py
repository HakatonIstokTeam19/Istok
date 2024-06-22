from django import forms
from Istok_app.models import Orders, Finished_furniture, Application, Parts


class Finished_furnitureCreateForm(forms.ModelForm):

    class Meta:
        model = Finished_furniture
        fields = ('name', 'type', 'form', 'body_material', 'facades_material', 'price',
                  'image_1', 'image_2', 'image_3', 'image_4')

class ApplicationCreateForm(forms.ModelForm):

    class Meta:
        model = Application
        fields = ('type', 'form', 'form', 'addition', 'facades_material', 'table_material', 'plumb', 'appliances',
                  'budget', 'consultation', 'last_name', 'first_name', 'patronymic', 'phone', 'connection', 'link',
                  'data', 'time')


class OrdersCreateForm(forms.ModelForm):

    class Meta:
        model = Orders
        fields = ('order_user', 'order_number', 'order_date', 'order_shipment_date', 'order_status',
                  'order_delivery_address', 'order_contract', 'order_price', 'order_sketch1', 'order_sketch2',
                  'order_sketch3', 'order_sketch4', 'order_3D_model')


class PartsCreateForm(forms.ModelForm):

    class Meta:
        model = Parts
        fields = ('order_number', 'parts_type', 'parts_name', 'parts_unit', 'parts_quantity', 'parts_price',
                  'parts_image')