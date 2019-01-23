import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import rwlist from '@/components/rw/rwlist'
import splist from '@/components/sp/splist'
import zmtlist from '@/components/zmt/zmtlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/rwlist',
      name: 'rwlist',
      component: rwlist
    },{
      path: '/splist',
      name: 'splist',
      component: splist
    },{
      path: '/zmtlist',
      name: 'zmtlist',
      component: zmtlist
    }
  ]
})
