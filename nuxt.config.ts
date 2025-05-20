// import { transformAssetUrls } from 'vite-plugin-vuetify'
// import vuetify from 'vite-plugin-vuetify'
// import type { UserConfig } from 'vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: [
  //   '@pinia/nuxt'
  // ],
  build: {
    transpile: ['vuetify']
  },
  // imports: {
  //   dirs: ['stores']
  // },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  runtimeConfig: {
    apiKey: '',
    public: {
      apiUrl: '',
    }
  }
})
