from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import generics
from Istok_app.models import Finished_furniture, Finished_furniture
from .serializers import FinishedFurnitureSerializer
from rest_framework.response import Response


class FinishedFurnitureApiView(APIView):
    def get(self, request):
        f = Finished_furniture.objects.all()
        return Response({'finished_furniture': FinishedFurnitureSerializer(f, many=True).data})

    def post(self, request):
        serializer = FinishedFurnitureSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'finished_furniture': serializer.data})

    def put(self, request, *args, **kwargs):
        id = kwargs.get('id', None)
        if not id:
            return Response({'error': "Метод PUT требует ID объекта который будет изменен"})
        try:
            instance = Finished_furniture.objects.get(pk=id)
        except:
            return Response({'error': f'Объект Finished_furniture с ID={id} не существует'})
        serializer = FinishedFurnitureSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"finished_furniture": serializer.data})

    def delete(self, request, *args, **kwargs):
        id = kwargs.get("id", None)
        if not id:
            return Response({'error': 'Метод DELETE не разрешен'})
        elif Finished_furniture.objects.filter(pk__exact=id).exists():
            Finished_furniture.objects.get(pk=id).delete()
            return Response({'finished_furniture': f'Удален объект Finished_furniture(id={id})'})
        else:
            #ID в запросе присутствует, но такого объекта нет
            return Response({'finished_furniture': f'Объект с Finished_furniture(id={id}) не существует'})

finished_furniture_api = FinishedFurnitureApiView.as_view()
