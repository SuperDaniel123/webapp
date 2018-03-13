import Vue from 'vue'
import Router from 'vue-router'
import silde from '@/components/rootlayer'
import index from '@/base/index'
import test from '@/base/test'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/',
      name: 'silde',
      component: silde,
      children:[
        {
          path:'/',
          name:'index',
          component:index
        },
        // {
        //   path:'/test',
        //   name:'test',
        //   component:test
        // }
      ]
    }
  ]
})
