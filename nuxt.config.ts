 export default defineNuxtConfig({
  app: {
    baseURL: '/', // ← Cambiar esto
    buildAssetsDir: '/_nuxt/'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'static'
  }
})
