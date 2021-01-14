from django.db import models

# Create your models here.
class scores(models.Model):
    name=models.CharField(max_length=200,null=False)
    score=models.CharField(max_length=3,null=False)

