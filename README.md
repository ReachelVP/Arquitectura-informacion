# Pixel Independiente — Tarea 5

Blog sobre videojuegos independientes construido con **Nuxt 4** y **Nuxt Content 3**
(Tutorial 2), con comentarios por artículo mediante **Utterances**.

## Sitio publicado

🔗 **https://reachelvp.github.io/Arquitectura-informacion/**

- Listado del blog: https://reachelvp.github.io/Arquitectura-informacion/blog
- Repositorio (código y comentarios): https://github.com/ReachelVP/Arquitectura-informacion

## Qué se hizo en la tarea

1. **Repositorio de comentarios con Utterances.** Se usa el repositorio público
   `ReachelVP/Arquitectura-informacion`, con Issues habilitados y la aplicación
   [Utterances](https://github.com/apps/utterances) instalada. Cada hilo de comentarios
   se guarda como un *issue* de ese repositorio.
2. **Comentarios en todas las páginas de contenido.** El componente
   [`app/components/Comentarios.vue`](app/components/Comentarios.vue) inserta el script
   de Utterances y se incluye al final de
   [`app/pages/blog/[...slug].vue`](app/pages/blog/[...slug].vue).
   - El `issue-term` es la ruta del artículo (`/blog/<slug>`), así que cada entrada
     tiene su propio hilo.
   - El componente usa `:key="route.path"` para que, al navegar de un artículo a otro
     (por ejemplo, con los enlaces *anterior / siguiente*), el hilo se vuelva a crear y
     muestre los comentarios del artículo correcto.
3. **Publicación en GitHub Pages.** El workflow
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) ejecuta
   `nuxt generate` con `NUXT_APP_BASE_URL=/Arquitectura-informacion/` y publica
   `.output/public` cada vez que se hace *push* a `main`.

## Estructura

```
content.config.ts          # colección "blog" (author, date, image, tags)
content/blog/*.md          # seis entradas
public/images/blog/*.svg   # imágenes destacadas
app/pages/blog/index.vue   # listado ordenado por fecha descendente
app/pages/blog/[...slug].vue  # detalle + comentarios
app/components/Comentarios.vue
app/assets/css/blog.css    # hoja de estilo (importada en nuxt.config.ts)
```

## Ejecutar localmente

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # sitio estático en .output/public
```
