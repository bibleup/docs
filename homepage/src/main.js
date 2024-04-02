import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router.js'
import { createHead } from 'unhead'
import '@/css/core.less';

//configure Nprogress
NProgress.configure({ showSpinner: false });

// Create a global head instance
const head = createHead()

let app = createApp(App)
app.use(head).use(router).mount('#app')
