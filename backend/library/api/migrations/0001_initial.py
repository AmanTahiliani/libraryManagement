# Generated by Django 4.1.2 on 2022-10-29 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Author",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField(blank=True, default="")),
            ],
            options={
                "ordering": ["name"],
            },
        ),
    ]
