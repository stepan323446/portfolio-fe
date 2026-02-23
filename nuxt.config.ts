// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        // Basic favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        // Standard sizes
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64x64.png' },
      ]
    }
  },

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