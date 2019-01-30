import Vue from 'vue'
import Router from 'vue-router'
import rwlist from '@/components/rw/rwlist'
import rwadd from '@/components/rw/rwadd'
import splist from '@/components/sp/splist'
import zmtlist from '@/components/zmt/zmtlist'
import user from '@/components/user/user'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'logins',
      component: login
    },{
      path: '/rwlist',
      name: 'rwlist',
      component: rwlist
    },,{
      path: '/rwadd',
      name: 'rwadd',
      component: rwadd
    },{
      path: '/splist',
      name: 'splist',
      component: splist
    },{
      path: '/zmtlist',
      name: 'zmtlist',
      component: zmtlist
    },{
      path: '/user',
      name: 'user',
      component: user
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
