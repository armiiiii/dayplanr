from django.db import models


class TODO(models.Model):
	text = models.CharField(max_length = 1000)
	expire = models.DateTimeField()

class Macros(models.Model):
	...
