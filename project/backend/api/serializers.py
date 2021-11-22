from rest_framework import serializers


class ArticleSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255, allow_null=False)
    body = serializers.CharField()
    preview_image = serializers.ImageField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass
