from django.db import models
from rest_framework.serializers import ModelSerializer

WEEK = {
    "SUNDAY": "SUNDAY",
    "MONDAY": "MONDAY", 
    "TUESDAY": "TUESDAY",
    "WEDNESDAY": "WEDNESDAY",
    "THURSDAY": "THURSDAY",
    "FRIDAY": "FRIDAY",
    "SATURDAY": "SATURDAY"
}

class Task(models.Model):
    order = models.PositiveSmallIntegerField(null=False, blank=False)
    task = models.CharField(max_length=250, null=False, blank=False)
    done = models.BooleanField(default=False, blank=True)
    day = models.CharField(choices=WEEK, blank=False, null=False, max_length=9)


class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"
