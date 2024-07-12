from django.contrib import admin
from django.urls import path, include

from tasks.views import get_week, todos_index


urlpatterns = [
    path("__debug__/", include("debug_toolbar.urls")),
    path('admin/', admin.site.urls),
    path('', get_week, name="get_week"),
    path('todos/', todos_index, name="todos_index"),
]
