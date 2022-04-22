import { createApp } from 'vue'
import App from './App.vue'
import installComponent from './installComponent'
const app = createApp(App)

app.use(installComponent).mount('#app')
