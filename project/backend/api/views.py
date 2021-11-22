from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from api.models import Article
from api.serializers import ArticleSerializer


class ArticleView(APIView):
    def get(self, request: Request):
        articles = Article.objects.all()
        articles_serialized = ArticleSerializer(articles, many=True)

        return Response(status=status.HTTP_200_OK, data=articles_serialized.data)

    def post(self):
        response_data = {'message': 'This api supports only GET requests'}
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED, data=response_data)

    def put(self):
        response_data = {'message': 'This api supports only GET requests'}
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED, data=response_data)

    def delete(self):
        response_data = {'message': 'This api supports only GET requests'}
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED, data=response_data)
