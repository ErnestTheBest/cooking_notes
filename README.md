# Kitchen Notes

**[Open the live site →](https://ernestthebest.github.io/cooking_notes/)**

A personal collection of cooking methods, ingredient quantities, equipment
notes, and observations. The site is built with Astro from Markdown files and
published automatically with GitHub Pages.

## Local preview

Start the development site with Docker Compose:

```sh
docker compose up --build
```

Open <http://localhost:4324>. Changes to Markdown files are reflected
automatically.

To use a different local port:

```sh
SITE_PORT=4321 docker compose up --build
```

To verify the final static build inside the container:

```sh
docker compose run --rm site npm run build
```

## Adding a cooking note

Notes are stored in `src/content/notes/`. After adding or editing a Markdown
file, commit and push the change to `main`:

```sh
git add src/content/notes
git commit -m "Add cooking note"
git push
```

GitHub Actions builds the Astro site and publishes the updated version to
[GitHub Pages](https://ernestthebest.github.io/cooking_notes/) automatically.
