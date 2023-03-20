import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js' // 引入路由

router.beforeEach((to, from, next) => {
    // console.log(to,"to")
    // console.log(from,"from")
    if(to.name == 'userPage'){
        // next({replace: true, name: 'AppLogin'})
        next()
    }else{
        next()
    }
})
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')