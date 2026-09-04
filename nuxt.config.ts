// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
  '@mdi/font/css/materialdesignicons.css'
],
build: {
  transpile: ['vuetify'],
},
nitro: {
  preset: 'node-server'
}
})
