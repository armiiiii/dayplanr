from django.http import JsonResponse

from rest_framework.parsers import JSONParser

from .models import Task, TaskSerializer, WEEK


def index(request):
    if request.method == 'GET':
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
    elif request.method == 'POST':
        print("I am here")
        data = JSONParser().parse(request)
        print(data)
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    return JsonResponse(f"Unsupported method {request.method}", status=501)
