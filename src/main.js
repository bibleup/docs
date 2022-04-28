import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import '@/css/core.less';

let app = createApp(App)
app.use(router).mount('#app')
