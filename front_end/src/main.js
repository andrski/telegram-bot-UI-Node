import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import store from './store/index'
import router from './router/index'


const app = createApp(App)
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')
