# Generated by Django 4.1.1 on 2022-11-08 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("programs", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="wellnessprogram",
            name="thumbnail",
            field=models.ImageField(upload_to="static/images"),
        ),
    ]