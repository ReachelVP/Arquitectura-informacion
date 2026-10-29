// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/blog.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Pixel Independiente',
      meta: [
        { name: 'description', content: 'Un blog sobre videojuegos independientes: diseño, historia y escena.' }
      ]
    }
  },
  content: {
    // Usa el módulo node:sqlite incluido en Node 22, sin dependencias nativas
    experimental: {
      sqliteConnector: 'native'
    },
    build: {
      markdown: {
        highlight: false
      }
    }
  }
})
