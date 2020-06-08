import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cookie from '../services/CookieService'



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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login" */ '../views/Register.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import(/* webpackChunkName: "reservation" */ '../views/Reservation.vue'),
    beforeEnter: (to, from, next) => {
      const isAuth = cookie.get('access_token')
      if (isAuth) {
        next()
      } else {
        next({ name: 'Login' })
      }

    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
