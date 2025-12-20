# Restaurant API

Django REST API для управления меню ресторана

## Запуск с Docker

```bash
# Перейти в backend
cd backend

# Запустить приложение
docker-compose up -d

# Остановить приложение
docker-compose down

# Просмотр логов
docker-compose logs -f

# Создать суперпользователя
docker-compose exec web python manage.py createsuperuser
```

## API Endpoints

### Menu Items
- `GET /api/menu-items/` - Получить все блюда
- `POST /api/menu-items/add/` - Создать блюдо
- `GET /api/menu-items/<id>/` - Получить блюдо по ID
- `PUT /api/menu-items/<id>/update/` - Обновить блюдо
- `DELETE /api/menu-items/<id>/delete/` - Удалить блюдо

### Categories
- `GET /api/categories/` - Получить все категории
- `POST /api/categories/add/` - Создать категорию
- `GET /api/categories/<id>/` - Получить категорию по ID
- `PUT /api/categories/<id>/update/` - Обновить категорию
- `DELETE /api/categories/<id>/delete/` - Удалить категорию

## Доступ

- API: http://localhost:8000/api/
- Admin: http://localhost:8000/admin/
- PostgreSQL: localhost:5432
