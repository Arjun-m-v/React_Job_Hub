from django.db import models

# Create your models here.

class EmployeeModel(models.Model):
    employee=models.CharField(max_length=100)
    email=models.EmailField()
    phone=models.IntegerField()
    qualification=models.CharField(max_length=100)
    qualification_percentage=models.CharField(max_length=100)
    passout_year=models.IntegerField()
    no_of_backlogs=models.CharField(max_length=100)
    resume=models.FileField(upload_to="employee_resumes")

class CompanyModel(models.Model):
    company=models.CharField(max_length=100)
    location=models.CharField(max_length=100)
    req_skills=models.CharField(max_length=500)
    req_qualifications=models.CharField(max_length=500)
    salary=models.IntegerField()
    contact_number=models.IntegerField()
    notes=models.CharField(max_length=500)
    image=models.ImageField(upload_to="company_images")

