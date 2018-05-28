from django.conf.urls import url, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'grapplers', views.GrapplerViewSet)
router.register(r'clips', views.ClipViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
