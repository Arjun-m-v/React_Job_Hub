# Generated by Django 5.0.2 on 2024-07-05 08:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_companymodel_position_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='companymodel',
            name='position_name',
        ),
    ]
