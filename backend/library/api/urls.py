from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("users/", views.UserList.as_view()),
    path("users/<int:pk>", views.UserDetail.as_view()),
    path("authors/", views.AuthorList.as_view()),
    path("authors/<int:pk>", views.AuthorDetail.as_view()),
    path("publications/", views.PublicationList.as_view()),
    path("publications/<int:pk>", views.PublicationDetail.as_view()),
    path("book/", views.BookView.as_view()),
    path("upload/", views.BookView.as_view()),
    path("search/title/", views.BookView.as_view()),
    path("search/keywords", views.searchInDatabase.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
