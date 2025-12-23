from rest_framework import permissions


class HasValidAPIKey(permissions.BasePermission):
    """
    Custom permission to check if request has valid API key authentication.
    Works with APIKeyAuthentication that returns (None, key_obj).
    """
    
    def has_permission(self, request, view):
        # If authentication was successful, request.auth will contain the APIKey object
        return request.auth is not None
