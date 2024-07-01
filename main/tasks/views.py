import json

from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder

from .models import Task, week


def index(request):
    if request.method == 'POST':
        req = request.POST
        print(req)
        Task.objects.create(task = req['task'], day = req['day'], order = req['order'])
        return JsonResponse('200')
    Week = {}
    for d, day in week.items():
        queryset = Task.objects.filter(day=d).order_by("order")
        Week[day] = json.dumps(list(queryset), cls=DjangoJSONEncoder)
    return JsonResponse([{"week": Week}])
