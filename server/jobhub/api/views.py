from django.shortcuts import render
from .serializers import EmployeeSerializer,CompanySerializer,UserSerializer
from .models import EmployeeModel,CompanyModel
from rest_framework.viewsets import ModelViewSet,ViewSet
from rest_framework import status
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import authentication

# Create your views here.

class UserViewSet(ViewSet):
    def create(self,request,*args,**kwargs):
        ser=UserSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(data=ser.data,status=status.HTTP_201_CREATED)
        return Response(data=ser.errors,status=status.HTTP_406_NOT_ACCEPTABLE)

class EmployeeModelViewSet(ModelViewSet):
    serializer_class=EmployeeSerializer
    queryset=EmployeeModel.objects.all()


class CompanyModelViewSet(ModelViewSet):
    serializer_class=CompanySerializer
    queryset=CompanyModel.objects.all()