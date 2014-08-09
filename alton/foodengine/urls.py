from django.conf.urls import patterns, url

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'alton.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^', 'foodengine.main', name='main'),
)
