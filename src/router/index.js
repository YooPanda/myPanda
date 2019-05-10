import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoldIndex from '@/mall/goldIndex'
import MallIndex from '@/mall/mallIndex'
import HqbIndex from '@/mall/hqbIndex'
import DqbIndex from '@/mall/dqbIndex'
import JjbIndex from '@/mall/jjbIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mallIndex',
      name: 'MallIndex',
      component: MallIndex
    },
    {
      path: '/goldIndex',
      name: 'GoldIndex',
      component: GoldIndex
    },
    {
      path: '/hqbIndex',
      name: 'HqbIndex',
      component: HqbIndex
    },
    {
      path: '/dqbIndex',
      name: 'DqbIndex',
      component: DqbIndex
    },
    {
      path: '/jjbIndex',
      name: 'JjbIndex',
      component: JjbIndex
    }

  ]
})
