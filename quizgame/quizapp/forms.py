from django import forms
from django.forms import TextInput
from . models import scores
import json
import sqlite3
import codecs
class PostForm(forms.ModelForm):
    class Meta(object):
        model = scores
        fields = ("name")
