import type { Locales } from '@/i18n/i18n-types'
import { createApp } from 'vue'
import VueGtag from 'vue-gtag-next'
import App from './App.vue'
import { loadLocaleAsync } from './i18n/i18n-util.async'
import { i18nPlugin } from './i18n/i18n-vue'
import 'uno.css'

const app = createApp(App)
const lang = (localStorage.getItem('LANG') || 'en') as Locales

loadLocaleAsync(lang).then(() => {
  app.use(i18nPlugin, lang)
    .use(VueGtag, {
      property: {
        id: import.meta.env.VITE_APP_GTAG_ID,
      },
    })
    .mount('#app')
})
