from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("profile", views.account, name="profile"),
    # path("", views.getText, name="gettext"),
    path("save", views.save, name="save"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
]

