<!-- app/pages/blog/[...slug].vue -->
<script setup>
const route = useRoute()
const { urlPublica, fecha } = useFormato()

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}

const { data: vecinos } = await useAsyncData(`${route.path}-vecinos`, () => {
  return queryCollectionItemSurroundings('blog', route.path, {
    fields: ['title']
  })
})

useSeoMeta({
  title: post.value.title,
  description: post.value.description
})
</script>

<template>
  <article class="articulo">
    <img class="portada-articulo" :src="urlPublica(post.image)" :alt="post.title">

    <p class="meta">
      Por <strong>{{ post.author }}</strong> ·
      <time :datetime="post.date">{{ fecha(post.date) }}</time>
    </p>
    <ul class="etiquetas">
      <li v-for="tag in post.tags" :key="tag">#{{ tag }}</li>
    </ul>

    <ContentRenderer :value="post" class="contenido" />

    <nav class="vecinos">
      <NuxtLink v-if="vecinos?.[0]" :to="vecinos[0].path" class="anterior">
        ← {{ vecinos[0].title }}
      </NuxtLink>
      <NuxtLink v-if="vecinos?.[1]" :to="vecinos[1].path" class="siguiente">
        {{ vecinos[1].title }} →
      </NuxtLink>
    </nav>

    <!-- La key fuerza a recrear el hilo de Utterances al navegar entre artículos -->
    <Comentarios :key="route.path" :termino="route.path" />
  </article>
</template>
