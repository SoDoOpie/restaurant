from django.contrib import admin
from .models import APIKey, Category, MenuItem

# Register your models here.

@admin.register(APIKey)
class APIKeyAdmin(admin.ModelAdmin):
    list_display = ('name', 'key_preview', 'is_active', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('name', 'key')
    readonly_fields = ('key', 'created_at')
    
    def key_preview(self, obj):
        return f"{obj.key[:10]}..."
    key_preview.short_description = 'API Key'

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'description')

