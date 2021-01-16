"""quizgame URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from quizapp.views import homepage
from quizapp.views import quizpage
from quizapp.views import savehighScore

from quizapp.views import HSpage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',homepage),
path('index.html',quizpage),
path('index.html/end.html',quizpage),
path('end.html/',savehighScore,name='savehighScore'),
path('end.html/home.html',homepage,name='return_to_home'),
path('hspage.html/',HSpage,name='Go_To_Highscore'),
path('end.html/hspage.html',HSpage,name='Go_To_Highscore'),
path('hspage.html/home.html',homepage,name='return_to_home'),
path('hspage.html/index.html',quizpage),
path('hspage.html/hspage.html',HSpage),
path('end.html/index.html',quizpage,name='Quiz')
]
