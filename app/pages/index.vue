<script setup>
const { data: recientes } = await useAsyncData('inicio-recientes', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .select('path', 'title', 'description')
    .limit(3)
    .all()
})

useSeoMeta({
  title: 'Pixel Independiente',
  description: 'Un blog sobre videojuegos independientes: diseño, historia y escena.'
})
</script>

<template>
  <section class="portada">
    <h1>Pixel Independiente</h1>
    <p class="bajada">
      Un blog sobre videojuegos independientes: qué los define, cómo se diseñan
      y por qué siguen sorprendiéndonos.
    </p>
    <NuxtLink to="/blog" class="boton">Leer el blog →</NuxtLink>

    <h2>Lo más reciente</h2>
    <ul class="lista-simple">
      <li v-for="post in recientes" :key="post.path">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        <span> — {{ post.description }}</span>
      </li>
    </ul>
  </section>
</template>
