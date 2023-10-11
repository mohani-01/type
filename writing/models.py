from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
# Create your models here.
class User(AbstractUser):
    pass


class Test_Time(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="time")
    game_type = models.CharField(max_length=4,default="Time")
    test_type = models.PositiveIntegerField(null=False)
    speed = models.PositiveIntegerField(null=False)
    accuracy = models.IntegerField(null=False, validators=[MaxValueValidator(100), MinValueValidator(1)])
    time_frame = models.IntegerField(null=False)
    time = models.DateTimeField(auto_now_add=True)
    raw_speed = models.PositiveIntegerField(null=False)
    character = models.CharField(max_length=17, blank=False)


class Test_Word(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="word")
    game_type = models.CharField(max_length=5, default="Words")
    test_type = models.PositiveIntegerField(null=False)
    speed = models.PositiveIntegerField(null=False)
    accuracy = models.IntegerField(null=False, validators=[MaxValueValidator(100), MinValueValidator(1)])
    time_frame = models.IntegerField(null=False)
    time = models.DateTimeField(auto_now_add=True)
    raw_speed = models.PositiveIntegerField(null=False)
    character = models.CharField(max_length=17, blank=False)
