import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './views/Login'
import Results from './views/Results'

const routes = [
  {
    path: '/',
    component: Login,
    beforeEnter: (to, from, next) => {
      const user = Vue.prototype.$session.get('user')
      if (user) {
        next('/results')
      } else {
        next()
      }
    }
  },
  {
    path: '/results',
    component: Results,
    beforeEnter: (to, from, next) => {
      const user = Vue.prototype.$session.get('user')
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
