# Generated by Django 4.1.2 on 2022-11-01 00:08

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_alter_book_author_alter_book_publication_booktemp"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="book",
            name="path",
        ),
        migrations.AddField(
            model_name="book",
            name="pdf",
            field=models.FileField(
                blank=True, null=True, upload_to=api.models.upload_to
            ),
        ),
        migrations.AlterField(
            model_name="book",
            name="author",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="books",
                to="api.author",
            ),
        ),
        migrations.AlterField(
            model_name="book",
            name="publication",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="books",
                to="api.publication",
            ),
        ),
        migrations.DeleteModel(
            name="BookTemp",
        ),
    ]
