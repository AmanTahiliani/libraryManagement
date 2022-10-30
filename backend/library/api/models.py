from enum import unique
import black
from django.db import models

# Create your models here.
class Author(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=True, default="")

    class Meta:
        ordering = ["name"]


class Publication(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False, unique=True)
    location = models.CharField(max_length=100, blank=True)

    class Meta:
        ordering = ["name"]


class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False)
    path = models.TextField(blank=False, unique=True)
    author = models.ForeignKey("Author", related_name="books", on_delete=models.CASCADE)
    publication = models.ForeignKey(
        "Publication", related_name="books", on_delete=models.CASCADE
    )

    class Meta:
        ordering = ["name"]
