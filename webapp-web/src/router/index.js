import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from './../containers/Full'
import Welcome from '../pages/Welcome'

// Views
// normal
const requiresAuth = false

Vue.use(Router)

export default new Router({
  // mode: 'hash', // Demo is living in GitHub.io, so required!
  mode: 'history',
  base: '/',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: '',
      component: Full,
      redirect: '/welcome',
      children: [
        {
          meta: {
            description: '', label: '', labelName: '', sidebar: true, requiresAuth: requiresAuth
          },
          path: 'welcome/:ACT?',
          name: 'welcome page',
          component: Welcome
        },
        {
          meta: {
            description: '', label: '', labelName: '', sidebar: true, requiresAuth: requiresAuth
          },
          path: 'welcome/:ACT?/:GUID?',
          name: 'welcome page',
          component: Welcome
        }
      ]
    },
    {
      path: '/auth/:ACT?',
      name: 'Auth Service',
      component: Welcome
    },
    {
      // for NotFound
      path: '*',
      redirect: '/'
    }
  ]
})
