from django.db import models

class Task(models.Model):
	class DaysOfWeek(models.TextChoices):
		MONDAY = 'MON', "MONDAY"
		TUESDAY = 'TUES', 'TUESDAY'
		WEDNESDAY = 'WED', 'WEDNESDAY'
		THURSDAY = 'THURS', 'THURSDAY'
		FRIDAY = 'FRI', 'FRIDAY'
		SATURDAY = 'SAT', 'SATURDAY'
		SUNDAY = 'SUN', 'SUNDAY' 
	parent_task = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
	day = models.CharField(max_length=5, choices=DaysOfWeek)
	text = models.CharField(max_length = 1000, blank=False, null=False)
	done = models.BooleanField(default=False, blank=True)

	def __str__(self):
		return f'{self.text}'
