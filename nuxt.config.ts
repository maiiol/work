// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  target: 'static',
  generate: {
    fallback: true
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/ui'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  nitro: {
    experimental:{
      websocket: true
    }
  }
})