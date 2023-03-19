import { createRouter, createWebHistory } from 'vue-router'
import userPage from '../components/userPage.vue'
import rolePage from '../components/rolePage.vue'
import departmentPage from '../components/departmentPage.vue'
import menuPage from '../components/menuPage.vue'
import Home from '../views/Home.vue'
import AppLogin from '../views/AppLogin.vue'
const routerHistory = createWebHistory()


const routes = [
    {
        path: '/',
        component: Home,
        name: 'userPage',
        redirect: '/userPage',
        children: [
            {
                path: '/userPage',
                component: userPage,
            },
            {
                path: '/rolePage',
                component: rolePage,
            },
            {
                path: '/departmentPage',
                component: departmentPage,
            },
            {
                path: '/menuPage',
                component: menuPage,
            }
        ]
    },
    {
        path: '/login',
        name: 'AppLogin',
        component: AppLogin
    }

]
const router = createRouter({
    history: routerHistory,
    routes
})

export default router