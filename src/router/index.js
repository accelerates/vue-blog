import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Saber from '@/components/Saber'
import Article from '@/components/Article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello,
        header: Saber
      }
    },
    {
      path: '/article/:id',
      name: 'Article',
      components: {
        default: Article,
        header: null
      }
    },
    {
      path: '/log',
      components: {
        default: Hello,
        header: null
      }
    },
    {
      path: '/way',
      components: {
        default: Hello,
        header: null
      }
    },
    {
      path: '/share',
      components: {
        default: Hello,
        header: null
      }
    },
    {
      path: '/ctf',
      components: {
        default: Hello,
        header: null
      }
    }
  ]
})
