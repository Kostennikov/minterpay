import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: () => import('../views/Workflow.vue')
  },
  {
    path: '/currencies',
    name: 'Currencies',
    component: () => import('../views/Currencies.vue')
  },
  {
    path: '/fees',
    name: 'Fees',
    component: () => import('../views/Fees.vue')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../views/More.vue')
  },
  {
    path: '/login',
    name: 'Login',
    hideNav: false,
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/myAccount',
    name: 'myAccount',
    component: () => import('../views/MyAccount.vue')
  },
  {
    path: '/account-recovery',
    name: 'AccountRecovery',
    component: () => import('../views/AccountRecovery.vue')
  },
  {
    path: '/password-reset',
    name: 'PasswordReset',
    component: () => import('../views/PasswordReset.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
