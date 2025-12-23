from rest_framework import authentication
from rest_framework import exceptions
from .models import APIKey


class APIKeyAuthentication(authentication.BaseAuthentication):
    """
    API Key based authentication.
    
    Clients should authenticate by passing the API key in the "X-API-Key" HTTP header.
    For example:
        X-API-Key: your-api-key-here
    """
    
    def authenticate(self, request):
        api_key = request.META.get('HTTP_X_API_KEY')
        
        if not api_key:
            # No API key provided
            return None
        
        try:
            key_obj = APIKey.objects.get(key=api_key, is_active=True)
        except APIKey.DoesNotExist:
            raise exceptions.AuthenticationFailed('Invalid or inactive API key')
        
        # Return None as user since we're using API key authentication
        # You can modify this to return a user if you associate API keys with users
        return (None, key_obj)
    
    def authenticate_header(self, request):
        return 'X-API-Key'
