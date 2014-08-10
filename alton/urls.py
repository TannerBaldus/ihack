from django.conf.urls import patterns, include, url
from django.contrib import admin
from foodengine import views
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'alton.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', views.main, name='main'),
    url(r'^admin/', include(admin.site.urls)),
    url( r'^dummy$', views.dummy_data),
    url(r'^search$',views.search),
)
