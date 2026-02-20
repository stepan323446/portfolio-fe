// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  css: [
    '~/assets/main.css'
  ],
  plugins: [
    '~/plugins/fontawesome.ts'
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
      homepageLines: process.env.HOMEPAGE_LINES?.split(',')
    }
  },
})