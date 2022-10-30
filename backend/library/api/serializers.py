from rest_framework import serializers


from django.contrib.auth.models import User

from api.models import Author, Publication, Book


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]


class AuthorSerializer(serializers.ModelSerializer):
    books = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Author
        fields = ["name", "description", "books"]


class PublicationSerializer(serializers.Serializer):
    books = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Publication
        fields = ["name", "location", "books"]


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["name", "path", "author", "publication"]
