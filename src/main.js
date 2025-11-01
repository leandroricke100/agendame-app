import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import '@/scss/style.scss';
import vuetify from './plugins/vuetify'
const app = createApp(App)
app
  .use(router)
  .use(vuetify)
  .mount('#app')
