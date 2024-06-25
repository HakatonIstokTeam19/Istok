from django.contrib import admin

from Istok_app.models import Orders, Finished_furniture, Application, Parts, Tags, Finished_furniture_tags

admin.site.register(Orders)
admin.site.register(Finished_furniture)
admin.site.register(Application)
admin.site.register(Parts)
admin.site.register(Tags)
admin.site.register(Finished_furniture_tags)
