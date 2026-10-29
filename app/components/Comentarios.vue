<!-- Hilo de comentarios con Utterances: cada artículo se asocia a un issue
     del repositorio cuyo título es la ruta del artículo (/blog/...). -->
<script setup>
const props = defineProps({
  termino: { type: String, required: true }
})

const contenedor = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('repo', 'ReachelVP/Arquitectura-informacion')
  script.setAttribute('issue-term', props.termino)
  script.setAttribute('theme', 'github-light')
  contenedor.value.appendChild(script)
})
</script>

<template>
  <section class="comentarios">
    <h2>Comentarios</h2>
    <div ref="contenedor" />
  </section>
</template>
