import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pages/Home.vue'
import City from './views/pages/City.vue'
import Detail from './views/pages/Detail.vue'

Vue.use(Router)
// component: () => import('./views/About.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
})
