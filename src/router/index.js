import Vue from 'vue'
import Router from 'vue-router'
import rwlist from '@/components/rw/rwlist'
import rwadd from '@/components/rw/rwadd'
import rwzlist from '@/components/rw/rwzlist'
import splist from '@/components/sp/splist'
import spadd from '@/components/sp/spadd'
import sppend from '@/components/sp/sppend'
import zmtlist from '@/components/zmt/zmtlist'
import zmtpend from '@/components/zmt/zmtpend'
import user from '@/components/user/user'
import login from '@/components/login/login'
import index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/index',
      name: 'indexs',
      component: index
    },{
      path: '/rwlist',
      name: 'rwlist',
      component: rwlist
    },{
      path: '/rwadd',
      name: 'rwadd',
      component: rwadd
    },{
      path: '/rwzlist',
      name: 'rwzlist',
      component: rwzlist
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
      path: '/zmtpend',
      name: 'zmtpend',
      component: zmtpend
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
