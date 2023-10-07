from django.contrib.auth.models import AbstractUser
from django.db import models
# Create your models here.
class User(AbstractUser):
    pass


class Test(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="type")
    text_types = models.PositiveIntegerField(null=False)
    speed = models.PositiveIntegerField(null=False)
    accuracy = models.IntegerField(null=False)
    time = models.DateTimeField(auto_now_add=True)
    raw_speed = models.PositiveIntegerField(null=False)
    character = models.CharField(max_length=17, blank=False)
