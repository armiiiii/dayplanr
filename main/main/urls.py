from django.contrib import admin
from django.urls import path, include

from tasks.views import TODOApiView


urlpatterns = [
    path("__debug__/", include("debug_toolbar.urls")),
    path('admin/', admin.site.urls),
    path('todos/', TODOApiView.as_view(), name="get_week"),
    path('todos/<int:id>/', TODOApiView.as_view(), name="update_delete_todo"),
]
