# Create your views here.
from django.shortcuts import render_to_response
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.template.context import RequestContext
from django.template.loader import get_template
from django.template import TemplateDoesNotExist

import logging
logger = logging.getLogger(__name__)

@csrf_exempt
def main(request):
    template = 'main.html'
    context = {}
    context = dict(context.items() + request.REQUEST.items())

    try:
        get_template(template)
    except TemplateDoesNotExist as e:
        logger.error(e)

    response = render_to_response(template, context, RequestContext(request))
    return response
