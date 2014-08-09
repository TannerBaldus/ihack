from django.shortcuts import render_to_response
from django.template.context import RequestContext

# Create your views here.


def main(request):
	template = 'index.html'
	return render_to_response(template, {}, RequestContext(request))