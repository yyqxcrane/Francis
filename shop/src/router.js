import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/Classify.vue'
import Cart from './views/Cart.vue'
import Detail from './views/Detail.vue'
import Myhome from './views/Myhome.vue'
import FooterBar from './components/FooterBar.vue'

//路由懒加载，点击一个加载一个
// let Home=()=>import('./views/Home.vue');
// let Classify=()=>import('./views/Classify.vue');
// let Cart=()=>import('./views/Cart.vue');
// let Myhome=()=>import('./views/Myhome.vue');
// let Detail=()=>import('./views/Detail.vue');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components:{
        default:Home,
        'footer-bar':FooterBar
      }
      // 只缓存你想缓存的某些页面
      // meta:{   
      //   keepAlive:true
      // }
    },{
      path: '/classify',
      name: 'classify',
      // component: Classify
      components:{
        default:Classify,
        'footer-bar':FooterBar
      }
    },{
      path: '/cart',
      name: 'cart',
      // component: Cart
      components:{
        default:Cart,
        'footer-bar':FooterBar
      }
    },{
      path: '/myhome',
      name: 'myhome',
      // component: Myhome
      components:{
        default:Myhome,
        'footer-bar':FooterBar
      }
    },{
      path:'/detail',
      name:'detail',
      component:Detail
    }
  ]
})
