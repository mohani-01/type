from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("profile", views.account, name="profile"),
    path("save/time", views.save_time, name="save_time"),
    path("save/word", views.save_word, name="save_time"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
]

