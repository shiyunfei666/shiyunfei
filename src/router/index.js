import Vue from 'vue'
import Router from 'vue-router'
import rwlist from '@/components/rw/rwlist'
import rwadd from '@/components/rw/rwadd'
import splist from '@/components/sp/splist'
import spadd from '@/components/sp/spadd'
import sppend from '@/components/sp/sppend'
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
      path: '/spadd',
      name: 'spadd',
      component: spadd
    },{
      path: '/sppend',
      name: 'sppend',
      component: sppend
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
