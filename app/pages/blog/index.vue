<!-- app/pages/blog/index.vue -->
<script setup>
const { urlPublica, fecha } = useFormato()

const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'author', 'date', 'image', 'tags')
    .all()
})

useSeoMeta({
  title: 'Blog — Pixel Independiente',
  description: 'Todas las entradas del blog sobre videojuegos independientes.'
})
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul class="tarjetas">
      <li v-for="post in posts" :key="post.path" class="tarjeta">
        <NuxtLink :to="post.path">
          <img :src="urlPublica(post.image)" :alt="post.title" loading="lazy">
          <div class="tarjeta-cuerpo">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <p class="meta">{{ post.author }} · {{ fecha(post.date) }}</p>
            <ul class="etiquetas">
              <li v-for="tag in post.tags" :key="tag">#{{ tag }}</li>
            </ul>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
