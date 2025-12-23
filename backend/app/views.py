
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MenuItem, Category
from .serializers import MenuItemSerializer, CategorySerializer
from .authentication import APIKeyAuthentication
from rest_framework.decorators import authentication_classes

class MenuItemGetAllView(APIView):
    def get(self, request):
        menu_items = MenuItem.objects.all()
        serializer = MenuItemSerializer(menu_items, many=True)
        return Response(serializer.data)

@authentication_classes([APIKeyAuthentication])
class MenuItemCreateView(APIView):
    def post(self, request):
        serializer = MenuItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@authentication_classes([APIKeyAuthentication])
class MenuItemDeleteView(APIView):
    def delete(self, request, pk):
        try:
            menu_item = MenuItem.objects.get(pk=pk)
        except MenuItem.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        menu_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@authentication_classes([APIKeyAuthentication])
class MenuItemUpdateView(APIView):
    def put(self, request, pk):
        try:
            menu_item = MenuItem.objects.get(pk=pk)
        except MenuItem.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = MenuItemSerializer(menu_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MenuItemGetView(APIView):
    def get(self, request, pk):
        try:
            menu_item = MenuItem.objects.get(pk=pk)
        except MenuItem.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = MenuItemSerializer(menu_item)
        return Response(serializer.data)

class CategoryGetAllView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

@authentication_classes([APIKeyAuthentication])
class CategoryCreateView(APIView):
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@authentication_classes([APIKeyAuthentication])
class CategoryDeleteView(APIView):
    def delete(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@authentication_classes([APIKeyAuthentication])
class CategoryUpdateView(APIView):
    def put(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryGetView(APIView):
    def get(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CategorySerializer(category)
        return Response(serializer.data)

class MenuItemsByCategoryView(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        menu_items = MenuItem.objects.filter(category=category)
        serializer = MenuItemSerializer(menu_items, many=True)
        return Response(serializer.data)

class MenuItemsByAllCategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        data = {}
        for category in categories:
            menu_items = MenuItem.objects.filter(category=category)
            serializer = MenuItemSerializer(menu_items, many=True)
            data[category.name] = serializer.data
        return Response(data)

