import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import '@/scss/style.scss';
import vuetify from './plugins/vuetify'
import './plugins/yup'
import './plugins/axios'
import pinia from './plugins/pinia'

const app = createApp(App)
app
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
