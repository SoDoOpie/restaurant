from django.core.management.base import BaseCommand
from app.models import Category, MenuItem


class Command(BaseCommand):
    help = 'Load initial menu items into the database'

    def handle(self, *args, **kwargs):
        self.stdout.write('Loading menu items...')

        # Create categories
        appetizers_cat, _ = Category.objects.get_or_create(name='Appetizers')
        mains_cat, _ = Category.objects.get_or_create(name='Main Courses')
        desserts_cat, _ = Category.objects.get_or_create(name='Desserts')

        # Appetizers
        appetizers = [
            {
                "name": "Seared Scallops",
                "description": "Pan-seared scallops with citrus reduction and microgreens",
                "price": 18.00,
                "category": appetizers_cat,
                "image_url": "https://images.unsplash.com/photo-1763376385238-ba0211a17505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwYXBwZXRpemVyfGVufDF8fHx8MTc2NjAxMTExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
                "name": "Burrata & Heirloom Tomatoes",
                "description": "Fresh burrata, heirloom tomatoes, basil, aged balsamic",
                "price": 16.00,
                "category": appetizers_cat,
                "image_url": "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600",
            },
            {
                "name": "Crispy Calamari",
                "description": "Lightly fried calamari with lemon aioli and marinara",
                "price": 15.00,
                "category": appetizers_cat,
                "image_url": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600",
            },
        ]

        # Main courses
        mains = [
            {
                "name": "Wagyu Ribeye",
                "description": "12oz grass-fed wagyu ribeye, roasted vegetables, red wine reduction",
                "price": 48.00,
                "category": mains_cat,
                "image_url": "https://images.unsplash.com/photo-1705755402973-009b7877a0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzY2MDY0OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
                "name": "Atlantic Salmon",
                "description": "Grilled salmon, lemon butter sauce, asparagus, quinoa",
                "price": 32.00,
                "category": mains_cat,
                "image_url": "https://images.unsplash.com/photo-1562436260-126d541901e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbG1vbiUyMGRpc2h8ZW58MXx8fHwxNzY2MDE3MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
                "name": "Truffle Carbonara",
                "description": "Fresh fettuccine, pancetta, egg, parmesan, black truffle",
                "price": 28.00,
                "category": mains_cat,
                "image_url": "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYXxlbnwxfHx8fDE3NjYwMDQxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
        ]

        # Desserts
        desserts = [
            {
                "name": "Molten Chocolate Cake",
                "description": "Warm chocolate cake with liquid center, vanilla ice cream",
                "price": 12.00,
                "category": desserts_cat,
                "image_url": "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NjAyNDk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
                "name": "Crème Brûlée",
                "description": "Classic vanilla custard with caramelized sugar",
                "price": 10.00,
                "category": desserts_cat,
                "image_url": "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600",
            },
            {
                "name": "Tiramisu",
                "description": "Espresso-soaked ladyfingers, mascarpone, cocoa",
                "price": 11.00,
                "category": desserts_cat,
                "image_url": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600",
            },
        ]

        # Load all items
        all_items = appetizers + mains + desserts
        created_count = 0
        updated_count = 0

        for item_data in all_items:
            item, created = MenuItem.objects.update_or_create(
                name=item_data['name'],
                defaults={
                    'description': item_data['description'],
                    'price': item_data['price'],
                    'category': item_data['category'],
                    'image_url': item_data['image_url'],
                    'is_active': True,
                }
            )
            if created:
                created_count += 1
                self.stdout.write(self.style.SUCCESS(f'Created: {item.name}'))
            else:
                updated_count += 1
                self.stdout.write(self.style.WARNING(f'Updated: {item.name}'))

        self.stdout.write(self.style.SUCCESS(
            f'\nDone! Created {created_count} items, updated {updated_count} items.'
        ))
