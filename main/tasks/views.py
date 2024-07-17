from django.http import JsonResponse

from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.views import APIView

from .models import Task, TaskSerializer, WEEK


class TODOApiView(APIView):
    def get(self, request, format=None):
        week = []
        c = 1
        for d, day in WEEK.items():
            serializer = TaskSerializer(Task.objects.filter(day=d).order_by("order"), many=True)
            day = {
                "id": c,
                "day": d,
                "tasks": serializer.data
            }
            c += 1
            week.append(day)
        return JsonResponse(week, safe=False)

    def post(self, request, format=None):
        data = JSONParser().parse(request)
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(status=status.HTTP_406_NOT_ACCEPTABLE)

    def put(self, request, id, format=None):
        data = JSONParser().parse(request)
        task = Task.objects.get(id=id)
        print(data)
        serializer = TaskSerializer(task, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("", status=status.HTTP_202_ACCEPTED, safe=False)

    def delete(self, request, id, format=None):
        task = Task.objects.get(id=id)
        task.delete()
        return JsonResponse("", status=status.HTTP_204_NO_CONTENT, safe=False)
    