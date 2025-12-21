# Restaurant API

Django REST API для управления меню ресторана + React фронтенд

## Запуск с Docker

```bash
# Запустить все сервисы (backend, frontend, database)
docker-compose up --build

# Остановить приложение
docker-compose down

# Просмотр логов
docker-compose logs -f

# Загрузить данные меню вручную (если нужно)
docker-compose exec web python manage.py load_menu

# Создать суперпользователя
docker-compose exec web python manage.py createsuperuser
```

## Доступ

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin/
- **PostgreSQL**: localhost:5433

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
