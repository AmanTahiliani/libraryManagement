from enum import unique
import black
import os
from django.db import models
from django.utils import timezone

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


def upload_to(instance, filename):
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"pdfs/{base}/{now:%Y%m%d%H%M%S}{milliseconds}{extension}"


class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False)
    pdf = models.FileField(upload_to=upload_to, null=True, blank=True)
    author = models.ForeignKey("Author", related_name="books", on_delete=models.CASCADE)
    publication = models.ForeignKey(
        "Publication", related_name="books", on_delete=models.CASCADE
    )

    class Meta:
        ordering = ["name"]
