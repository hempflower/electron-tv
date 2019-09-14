import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logo-page',
      component: require('@/components/Logo').default
    },
    {
      path: '/tv',
      name: 'tv-page',
      component: require('@/components/TV').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
