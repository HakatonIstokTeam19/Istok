from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from users.models import Profile, Loyalty
from .models import Orders
from django.core.exceptions import ObjectDoesNotExist


@receiver(post_save, sender=Orders)
def create_profile(sender, instance, created, **kwargs):
    if created:
        code = instance.order_by_loyalty_code.loyalty_code
        if code:
            order_user = instance.order_user
            orders_quantity = len(Orders.objects.filter(order_user=order_user))
            loyalty = Loyalty.objects.filter(loyalty_code=code).first()
            if orders_quantity == 1 and loyalty:
                if order_user != loyalty.user:
                    loyalty.increase_balance(instance.order_price)