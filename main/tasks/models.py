from django.db import models

week = {
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
    day = models.CharField(choices=week, blank=False, null=False, max_length=9)
