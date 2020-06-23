import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'
import Account from '../components/account/Account.vue'

import Addproduct from '../components/account/Addproduct.vue'
import Myproduct from '../components/account/Myproduct.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/account/:id',
    name: 'Account',
    component: Account,
  },
  {
    path: '/add',
    name: 'Addproduct',
    component: Addproduct
  },
  {
    path: '/product',
    name: 'Myproduct',
    component: Myproduct
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
