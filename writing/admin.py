from django.contrib import admin
from .models import *
# Register your models here.

class TestAdmin(admin.ModelAdmin):
    list_display = ("user", "test_type", "speed", "raw_speed", "accuracy", "character", "time")


admin.site.register(User)
admin.site.register(Test_Time, TestAdmin)
admin.site.register(Test_Word, TestAdmin)