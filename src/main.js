import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// const apiURL = 'https://nskn-noroff-api.herokuapp.com/'
// const username = 'gingerbread'

// fetch(`${apiURL}/trivia?username=${username}`)
//     .then(response => response.json())
//     .then(results => {console.log(results[0].username)})

createApp(App)
.use(router)
.use(store)
.mount('#app')
