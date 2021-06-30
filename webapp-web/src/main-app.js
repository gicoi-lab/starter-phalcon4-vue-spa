import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import App from './AppMain.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import {Notifier} from '@airbrake/browser'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from './store'
import console from 'console'
import VueTelInput from 'vue-tel-input'
import './scss/combine.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueTelInput) // Define default global options here (optional)

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  // in development mode , use local laravel development server
  window.USE_API_URI = 'http://127.0.0.1:8000'
  window.I18N_CODE = 'en'
} else {
  window.USE_API_URI = window.origin
  window.I18N_CODE = (window.I18N_CODE === undefined ? 'zh' : window.I18N_CODE)
}
window.XPT_USER_LOGIN_URL = '/vip/login'

store.commit('SET_SERVER_URI', window.USE_API_URI)
store.commit('SET_I18NCODE', window.I18N_CODE)

const initDocumentTitle = document.title
// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  // document.title = to.meta.title
  if (to.name.length > 0) {
    document.title = to.name + ' - ' + initDocumentTitle
  }
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    (!store.state.token || store.state.token === 'null')
  ) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.console.log('Not authenticated')
    next({
      path: '/auth/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

sync(store, router)

console.log('App Init!')

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

/* VueJs airbrake */
/*
var airbrake = new Notifier({
  environment: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  projectId: '',
  projectKey: '',
  keysBlocklist: [
    'password',
    'token',
    'access_token'
  ]
})

Vue.config.errorHandler = function (err, vm, info) {
  airbrake.notify({
    error: err,
    params: {info: info}
  })
}
*/

import i18n from './locale/i18n'

new Vue({
  el: '#spa-app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: {
    App
  }
})

