# Generated by Django 4.2.5 on 2023-10-10 14:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('writing', '0008_test_time_time_frame'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test_time',
            name='accuracy',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(1)]),
        ),
        migrations.AlterField(
            model_name='test_word',
            name='accuracy',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(1)]),
        ),
    ]