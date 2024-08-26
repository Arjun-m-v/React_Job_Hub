# Generated by Django 5.0.6 on 2024-06-28 07:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_remove_employeemodel_applied_to_company'),
    ]

    operations = [
        migrations.CreateModel(
            name='ApplicationModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('application_date', models.DateTimeField(auto_now_add=True)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.companymodel')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.employeemodel')),
            ],
        ),
    ]
