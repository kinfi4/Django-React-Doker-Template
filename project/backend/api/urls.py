from django.urls import path

from api.views import ArticleView


urlpatterns = [
    path('articles', ArticleView.as_view()),
]
