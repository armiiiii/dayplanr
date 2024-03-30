from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("tasks/", include('main.urls')),
    path("users/", include('users.urls')),
]
