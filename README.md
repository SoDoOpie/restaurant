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
```

## Доступ

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin/ (логин: `admin`, пароль: `admin123`)
- **PostgreSQL**: localhost:5433

## API Аутентификация

Операции изменения данных (POST, PUT, DELETE) требуют API ключ. Операции чтения (GET) публичные.

### Получение API ключа:
1. Войдите в админ панель: http://localhost:8000/admin/
2. Перейдите в раздел "API Keys"
3. Создайте новый API ключ
4. Скопируйте сгенерированный ключ

### Использование API ключа:
Добавьте заголовок `X-API-Key` в запросы:
```bash
curl -X POST http://localhost:8000/api/menu-items/add/ \
  -H "X-API-Key: ваш-api-ключ" \
  -H "Content-Type: application/json" \
  -d '{"name": "Pizza", "price": 12.99}'
```

## API Endpoints

### Menu Items
- `GET /api/menu-items/` - Получить все блюда
- `POST /api/menu-items/add/` - Создать блюдо 🔒
- `GET /api/menu-items/<id>/` - Получить блюдо по ID
- `PUT /api/menu-items/<id>/update/` - Обновить блюдо 🔒
- `DELETE /api/menu-items/<id>/delete/` - Удалить блюдо 🔒

### Categories
- `GET /api/categories/` - Получить все категории
- `POST /api/categories/add/` - Создать категорию 🔒
- `GET /api/categories/<id>/` - Получить категорию по ID
- `PUT /api/categories/<id>/update/` - Обновить категорию 🔒
- `DELETE /api/categories/<id>/delete/` - Удалить категорию 🔒
- `GET /api/categories/menu-items/` - Получить все меню с группировкой по категориям
GET /api/check-api-key/  - проверить ключ

🔒 - требует API ключ
