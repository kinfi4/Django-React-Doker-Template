from django.db import models


class Article(models.Model):
    class Meta:
        db_table = 'Article'

    title = models.CharField(max_length=255, null=False)
    body = models.TextField()
    preview_image = models.ImageField(upload_to='previews')

    def __str__(self):
        return f'Article: {self.title}'
