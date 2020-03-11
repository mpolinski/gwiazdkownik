import Vue from 'vue'
import Vuex from 'vuex'
import VueSession from 'vue-session'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '../firebase.config'

firebase.initializeApp(firebaseConfig)
// firebase utils
const db = firebase.firestore()
console.log(db.collection('users'))
// const auth = firebase.auth()
// const currentUser = auth.currentUser

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueSession)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
