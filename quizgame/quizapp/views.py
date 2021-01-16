from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from .models import scores
def homepage(request):
    return render(request, "home.html")
def quizpage(request):
    return render(request, "index.html")
def HSpage(request):
    stud = scores.objects.all().order_by('score').reverse()
    print("Myoutput", stud)
    return render(request, "hspage.html",{'stu':stud})
def savehighScore(request):
#    delete_everything()
    if request.method == 'POST':
        #if request.POST.get('username') or request.POST.get('score'):#check...
        post = scores()
        post.name = request.POST.get('username')
        post.score = request.POST['score']
        post.save()
        return HttpResponseRedirect("home.html")
    else:
        return render(request,"end.html")
#def delete_everything():
#    scores.objects.get(id=60).delete()
