import { navigatorDetector } from 'typesafe-i18n/detectors';
import { createApp } from 'vue';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import { detectLocale } from './i18n/i18n-util';
import { loadLocaleAsync } from './i18n/i18n-util.async';
import { i18nPlugin } from './i18n/i18n-vue';
import 'uno.css';
var app = createApp(App);
// detect user's preferred locale
var detectedLocale = detectLocale(navigatorDetector);
loadLocaleAsync(detectedLocale).then(function () {
    app.use(i18nPlugin, detectedLocale)
        .use(VueGtag, {
        config: { id: import.meta.env.VITE_APP_GTAG_ID },
    })
        .mount('#app');
});
