#!/bin/bash

# Ждем, пока PostgreSQL будет готов
echo "Waiting for PostgreSQL..."
while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
  sleep 0.1
done
echo "PostgreSQL started"

# Применяем миграции
echo "Applying migrations..."
python manage.py makemigrations
python manage.py migrate

# Создаем суперпользователя (если нужно)
# python manage.py createsuperuser --noinput || true

# Запускаем сервер
exec "$@"
