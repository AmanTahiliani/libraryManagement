from django.contrib import admin
from api.models import Author, Publication, Book

# Register your models here.

admin.site.register(Author)
admin.site.register(Publication)
admin.site.register(Book)
