import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MonCompte from '../views/MonCompte.vue'


Vue.use(VueRouter)


const routes = [

  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    
  },
  {
    path: '/MonCompte',
    name: 'mon compte',
    component: MonCompte,
  },
]

const router = new VueRouter({
  routes
})

export default router
