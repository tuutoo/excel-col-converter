import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import 'uno.css'

createApp(App)
  .use(VueGtag, {
    config: { id: import.meta.env.APP_GTAG_ID },
  })
  .mount('#app')
