import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { Quasar } from 'quasar'
import {router} from "./routes/routes.js"


const app = createApp(App)
app.use(router)
app.use(Quasar)


app.mount('#app')
