// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  routeRules: {
    '/': {ssr: false,
       prerender:true,
        swr: 3600},
  },

  generate: {
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt',],

  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },

  nitro: {
    experimental:{
      websocket: true
    }   
  },

  compatibilityDate: '2025-05-29',
})