import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//create app using vue x store and vue router
createApp(App)
.use(store)
.use(router)
.mount('#app')
