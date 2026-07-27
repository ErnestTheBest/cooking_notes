# Кухонные записки

## Локальный просмотр

```sh
docker compose up --build
```

Сайт откроется на <http://localhost:4324>. Изменения Markdown-файлов
подхватываются автоматически.

Другой локальный порт можно задать так:

```sh
SITE_PORT=4321 docker compose up --build
```

Проверить финальную статическую сборку внутри контейнера:

```sh
docker compose run --rm site npm run build
```

## Добавление заметки

Заметки находятся в `src/content/notes/`. После изменения или добавления
Markdown-файла достаточно отправить его в ветку `main`:

```sh
git add src/content/notes
git commit -m "Add cooking note"
git push
```

GitHub Actions сам соберёт Astro и опубликует новую версию на GitHub Pages.

При первом запуске репозитория в GitHub нужно один раз открыть
`Settings → Pages` и выбрать `GitHub Actions` в качестве источника публикации.
