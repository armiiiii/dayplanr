# Generated by Django 5.0.3 on 2024-06-29 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='day',
            field=models.CharField(choices=[('SUNDAY', 'SUNDAY'), ('MONDAY', 'MONDAY'), ('TUESDAY', 'TUESDAY'), ('WEDNESDAY', 'WEDNESDAY'), ('THURSDAY', 'THURSDAY'), ('FRIDAY', 'FRIDAY'), ('SATURDAY', 'SATURDAY')], max_length=9),
        ),
    ]