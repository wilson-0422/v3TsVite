import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
/*
* Vant 组件
* */
app.use(ElementPlus);
/*
* vue 第三方插件
* */
app.use(router)
app.use(store)

app.mount('#app')
