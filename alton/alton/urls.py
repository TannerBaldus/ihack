from django.conf.urls import patterns, include, url
import foodengine

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'alton.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^', 'foodengine.views.main', name='main'),
)
