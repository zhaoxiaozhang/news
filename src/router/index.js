import Vue from 'vue'
import Router from 'vue-router'
import Header from '../views/header/header.vue'
import Home from '../views/home.vue'
import Words from '../views/words.vue'


Vue.use(Router)


export default new Router({
  meta: 'history',
  routes: [
    {
      path: '/', redirect: '/home/all?type=头条'
    },
    {
      path: '/header',
      name: 'Header',
      component: Header,
      meta:{  keepAlive: true },
      children: [
        {
          path: '/home/:type',
          name: 'Home',
          component: Home,
          meta:{  keepAlive: true  }
        }
      ]
    },
    {
      path: '/words',
      name: 'Words',
      component: Words,
      meta:{
        keepAlive: false
      },
    }
  ]

})
