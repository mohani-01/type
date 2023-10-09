from django.contrib.auth.models import AbstractUser
from django.db import models
# Create your models here.
class User(AbstractUser):
    pass


class Test_Time(models.Model):
    game_type = models.CharField(max_length=4,default="Time")
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="time")
    test_type = models.PositiveIntegerField(null=False)
    speed = models.PositiveIntegerField(null=False)
    accuracy = models.IntegerField(null=False)
    time = models.DateTimeField(auto_now_add=True)
    raw_speed = models.PositiveIntegerField(null=False)
    character = models.CharField(max_length=17, blank=False)


class Test_Word(models.Model):
    game_type = models.CharField(max_length=5, default="Words")
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="word")
    test_type = models.PositiveIntegerField(null=False)
    speed = models.PositiveIntegerField(null=False)
    accuracy = models.IntegerField(null=False)
    time_frame = models.IntegerField(null=False)
    time = models.DateTimeField(auto_now_add=True)

    raw_speed = models.PositiveIntegerField(null=False)
    character = models.CharField(max_length=17, blank=False)
