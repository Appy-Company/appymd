# Generated by Django 3.1.5 on 2021-01-27 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_code_label'),
    ]

    operations = [
        migrations.AlterField(
            model_name='code',
            name='codename',
            field=models.CharField(default='', max_length=10000000000000000000000000),
        ),
    ]
