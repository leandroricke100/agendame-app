import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import '@/scss/style.scss';
import vuetify from './plugins/vuetify'
import './plugins/yup'
import './plugins/axios'
import pinia from './plugins/pinia'
import axios from 'axios';
import { useMeStore } from './stores/me';

const app = createApp(App)
app.use(pinia)

const meStore = useMeStore()

meStore.getMe()
  .finally(() => {
    app
      .use(router)
      .use(vuetify)
      .mount('#app')
  })


