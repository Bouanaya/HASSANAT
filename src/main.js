import './assets/main.css'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';      //import preset 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

 

const app = createApp(App)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});

app.use(createPinia())
app.use(router)
app.mount('#app')
 

