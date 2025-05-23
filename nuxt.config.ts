// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-27',
  ssr: false,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  mdc: {
    components: {
      prose: true
    }
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        }
      }
    }
  },
  fonts: {
    assets: {
      prefix: '/_fonts'
    }
  },
})