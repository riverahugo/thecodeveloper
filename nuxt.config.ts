// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr:false,
    nitro: {
    preset: 'static' // para que genere archivos estáticos
  }
})
