from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.template.context import RequestContext
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
try:
	import simplejson as json
except Exception:
	import json

# Create your views here.


def main(request):
	template = 'index.html'
	return render_to_response(template, {}, RequestContext(request))

@csrf_exempt
@require_http_methods(['POST'])
def dummy_data(request):
	fake_entry = {"title":"Fake Recipe Title","image_url":"https://i.imgur.com/skSpO.jpg"}
	data = [fake_entry for i in range(0, 5)]
	data = json.dumps(data)
	return HttpResponse(data, mimetype='application/json')

def search(request):
	pass
