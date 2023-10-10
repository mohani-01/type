# Generated by Django 4.2.5 on 2023-10-09 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('writing', '0006_alter_test_time_user_test_word'),
    ]

    operations = [
        migrations.AddField(
            model_name='test_time',
            name='game_type',
            field=models.CharField(default='Time', max_length=4),
        ),
        migrations.AddField(
            model_name='test_word',
            name='game_type',
            field=models.CharField(default='Words', max_length=5),
        ),
        migrations.AddField(
            model_name='test_word',
            name='time_frame',
            field=models.IntegerField(default=100),
            preserve_default=False,
        ),
    ]