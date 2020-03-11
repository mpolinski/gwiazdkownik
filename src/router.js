import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './views/Login'
import Results from './views/Results'

const user = { name: 'John' }

const routes = [
  { path: '/', component: Login },
  {
    path: '/results',
    component: Results,
    beforeEnter: (to, from, next) => {
      if (!user) {
        next('/')
      } else {
        next()
      }
    },
  },
]

Vue.use(VueRouter)

export default new VueRouter({
  routes,
})
