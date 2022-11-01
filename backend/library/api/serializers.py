import os

from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Author, Book, Publication


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]


class AuthorSerializer(serializers.ModelSerializer):
    books = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Author
        fields = ["name", "description", "books"]


class PublicationSerializer(serializers.ModelSerializer):
    books = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Publication
        fields = ["name", "location", "books"]


# class BookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Book
#         fields = ["name", "path", "author", "publication"]


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["name", "pdf", "author", "publication"]

        def save(self, *args, **kwargs):
            if self.instance.pdf:
                self.instance.pdf.delete()
            return super().save(*args, **kwargs)
