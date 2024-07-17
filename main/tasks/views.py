from django.http import JsonResponse

from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Task, TaskSerializer, WEEK


def get_week(request):
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


def create_todo(request):
    data = JSONParser().parse(request)
    serializer = TaskSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
    return JsonResponse(status=status.HTTP_406_NOT_ACCEPTABLE)


def update_delete_todo(request, id):
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        task = Task.objects.get(id=id)
        serializer = TaskSerializer(task, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("", status=status.HTTP_202_ACCEPTED, safe=False)
    elif request.method == 'DELETE':
        task = Task.objects.get(id=id)
        task.delete()
        return JsonResponse("", status=status.HTTP_204_NO_CONTENT, safe=False)
    return JsonResponse("Something went wrong", status=status.HTTP_400_BAD_REQUEST, safe=False)