from django.contrib.auth.models import User
from django.shortcuts import render
from jmespath import search
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from api import serializers
from api.models import Author, Publication, Book
from rest_framework.response import Response
from rest_framework import status
from django.forms.models import model_to_dict
import json


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class AuthorList(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = serializers.AuthorSerializer

    def perform_create(self, serializer):
        serializer.save()


class AuthorDetail(generics.RetrieveAPIView):
    queryset = Author.objects.all()
    serializer_class = serializers.AuthorSerializer


class PublicationList(generics.ListCreateAPIView):
    queryset = Publication.objects.all()
    serializer_class = serializers.PublicationSerializer

    def perform_create(self, serializer):
        serializer.save()


class PublicationDetail(generics.RetrieveAPIView):
    queryset = Publication.objects.all()
    serializer_class = serializers.PublicationSerializer


class BookView(APIView):
    parser_classes = [MultiPartParser]
    lookup_field = "name"

    def get(self, request, format=None):
        bookName = request.GET.get("name")
        BookObj = Book.objects.filter(name=bookName)
        serializer = serializers.BookSerializer(BookObj, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = serializers.BookSerializer(data=request.data)
        # print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        # return Response(status.HTTP_200_OK)
