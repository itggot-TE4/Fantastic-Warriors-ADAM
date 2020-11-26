import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
// import Login from '../views/Login.vue'
// import { component } from 'vue/types/umd'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Login',
    name:'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')

  },
  {
    path:'/Admin',
    name:'Admin',
    component: () => import('../views/Admin.vue')

  },
  {
    path:'/Log',
    name:'Log',
    component: () => import('../views/Log.vue')

  },
  {

    path:'/Logs',
    name: 'Logs',
    component: () => import('../views/Logs.vue')

  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

//   console.log(store.state.currentUser.token)
  // console.log(to)
//   console.log(from)
  if (to.name !== 'Login' && to.name !=='Home' && store.state.currentUser.token === '') {
    next({name:'Login'})
  } else if (to.name === 'Admin' && store.state.currentUser.token !== 'Admin') {
    next({name:from.name})
  } else if (to.name === 'Logs' && store.state.currentUser.token === 'student') {
    next({name:'Log'})
  } else {
    next()
  }
  
})

export default router
