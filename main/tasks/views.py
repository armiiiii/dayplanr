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


def todos_index(request):
    print(request.META)
    DATA = JSONParser().parse(request)
    if request.method == 'POST':
        serializer = TaskSerializer(data=DATA)
        if serializer.is_valid():
            serializer.save()
            serializer = TaskSerializer(Task.objects.filter(day=DATA.get("day")).order_by("order"), many=True)
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(status=status.HTTP_406_NOT_ACCEPTABLE)
    elif request.method == 'PUT':
        task = Task.objects.get(data=DATA.id)
        serializer = TaskSerializer(task, data=DATA)
        if serializer.is_valid():
            serializer.save()
            serializer = TaskSerializer(Task.objects.filter(DATA.get("day")).order_by("order"), many=True)
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED, safe=False)
    else:
        task = Task.objects.get(data=DATA.id)
        task.delete()
        serializer = TaskSerializer(Task.objects.filter(DATA.get('day')).order_by("order"), many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)
