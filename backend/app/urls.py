from django.urls import path
from .views import (
    MenuItemGetView,
    MenuItemCreateView,
    MenuItemGetAllView,
    MenuItemDeleteView,
    MenuItemUpdateView,
    CategoryGetAllView,
    CategoryCreateView,
    CategoryDeleteView,
    CategoryUpdateView,
    CategoryGetView,
    MenuItemsByCategoryView,
    MenuItemsByAllCategoriesView,
)


urlpatterns = [
    path("menu-items/", MenuItemGetAllView.as_view(), name="menu-item-get"),
    path("menu-items/add/", MenuItemCreateView.as_view(), name="menu-item-post"),
    path("menu-items/<int:pk>/", MenuItemGetView.as_view(), name="menu-item-get-single"),
    path("menu-items/<int:pk>/delete/", MenuItemDeleteView.as_view(), name="menu-item-delete"),
    path("menu-items/<int:pk>/update/", MenuItemUpdateView.as_view(), name="menu-item-update"),
    path("categories/", CategoryGetAllView.as_view(), name="category-get"),
    path("categories/add/", CategoryCreateView.as_view(), name="category-post"),
    path("categories/<int:pk>/", CategoryGetView.as_view(), name="category-get-single"),
    path("categories/<int:pk>/delete/", CategoryDeleteView.as_view(), name="category-delete"),
    path("categories/<int:pk>/update/", CategoryUpdateView.as_view(), name="category-update"),
    path("categories/<int:category_id>/menu-items/", MenuItemsByCategoryView.as_view(), name="menu-items-by-category"),
    path("categories/menu-items/", MenuItemsByAllCategoriesView.as_view(), name="menu-items-by-all-categories"),
]
