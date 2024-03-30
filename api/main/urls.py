from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import TaskViewset

router = DefaultRouter()
router.register('', TaskViewset, basename='task')

urlpatterns = [
    path('', include(router.urls))
]
