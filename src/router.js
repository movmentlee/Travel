import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// component: () => import('./views/About.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/pages/Home.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/pages/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/pages/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
})
