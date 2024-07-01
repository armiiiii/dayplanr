# Generated by Django 5.0.3 on 2024-06-29 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.PositiveSmallIntegerField()),
                ('task', models.CharField(max_length=250)),
                ('done', models.BooleanField(blank=True, default=False)),
                ('day', models.CharField(choices=[('SUN', 'SUNDAY'), ('MON', 'MONDAY'), ('TUE', 'TUESDAY'), ('WED', 'WEDNESDAY'), ('THU', 'THURSDAY'), ('FRI', 'FRIDAY'), ('SAT', 'SATURDAY')], max_length=3)),
            ],
        ),
    ]