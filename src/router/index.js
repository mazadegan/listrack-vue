import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
    },
    {
        path: '/welcome',
        name: 'SignUpSuccess',
        component: () => import(/* webpackChunkName: "about" */ '../views/SignUpSuccess.vue')
    },
    {
        path: '/activated',
        name: 'Activated',
        component: () => import(/* webpackChunkName: "about" */ '../views/Activated.vue')
    },
    {
        path: '/mainapp',
        name: 'MainApp',
        component: () => import(/* webpackChunkName: "about" */ '../views/MainApp.vue')
    },
    {
        path: '/password_recovery',
        name: 'PasswordRecovery',
        component: () => import(/* webpackChunkName: "about" */ '../views/PasswordRecovery.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
