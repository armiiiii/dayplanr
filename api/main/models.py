from django.db import models

class Task(models.Model):
	parent_task = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
	text = models.CharField(max_length = 1000, blank=False, null=False)
	expire = models.DateTimeField(null=True, blank=True)
	done = models.BooleanField(default=False, blank=True)

	def __str__(self):
		return f'{self.text}'
