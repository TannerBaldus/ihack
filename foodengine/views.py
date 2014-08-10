from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django.template.context import RequestContext
from django.core import serializers
from foodengine.models import Recipe
try:
	import simplejson as json
except Exception:
	import json

# Create your views here.


def main(request):
	template = 'index.html'
	return render_to_response(template, {}, RequestContext(request))

def dummy_data(request):
	fake_entry = {"title":"Fake Recipe Title","image_url":"https://i.imgur.com/skSpO.jpg"}
	data = [fake_entry*5]
	data = json.dumps(data)
	return HttpResponse(data, mimetype='application/json')



def search(request):
	recipes = Recipe.objects.random_group()
	data = serializers.serialize('json', recipes)
	return HttpResponse(data, mimetype='application/json')

