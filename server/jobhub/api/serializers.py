from rest_framework import serializers
from .models import EmployeeModel,CompanyModel
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["email","username","password"]
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=EmployeeModel
        fields="__all__"

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model=CompanyModel
        fields="__all__"

