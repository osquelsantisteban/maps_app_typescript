import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

if(!navigator.geolocation)
    throw new Error('La geolocalización es necesaria.');

const app = createApp(App)
const pinia = createPinia();

app
    .use(pinia)
    .use(router)
    .mount('#app')
