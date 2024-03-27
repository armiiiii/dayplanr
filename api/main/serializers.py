from rest_framework import serializers

from .models import TODO, Macros


class TODOSerializer(serializer.ModelSerializer):
	class Meta:
		model = TODO

 
class MacrosSerializer(serializer.ModelSerializer):
	class Meta:
		model = Macros
