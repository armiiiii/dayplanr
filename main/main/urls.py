from django.contrib import admin
from django.urls import path, include

from tasks.views import get_week, create_todo, update_delete_todo


urlpatterns = [
    path("__debug__/", include("debug_toolbar.urls")),
    path('admin/', admin.site.urls),
    path('', get_week, name="get_week"),
    path('todos/', create_todo, name="create_todo"),
    path('todos/<int:id>', update_delete_todo, name="update_delete_todo"),
]
