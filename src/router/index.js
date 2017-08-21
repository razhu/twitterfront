import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tweets from '@/components/Tweets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tweets',
      name: 'Tweets',
      component: Tweets
    }
  ]
})
