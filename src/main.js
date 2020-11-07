import Vue from 'vue'
import Vuex from 'vuex'
import VueSession from 'vue-session'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '../firebase.config'
import router from './router'

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
window.db = db
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueSession)

const app = new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
