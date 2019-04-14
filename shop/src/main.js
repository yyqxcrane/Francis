import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

//vant全部引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//按需引入(推荐)

 import {GoodsAction,Card,SubmitBar,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,PullRefresh,List,Row,Col,Toast,CellGroup,Field,Button,Icon,NavBar,Tabbar, TabbarItem,Swipe,SwipeItem,Lazyload,Tab, Tabs} from 'vant'

 Vue.use(GoodsAction).use(Card).use(SubmitBar).use(GoodsActionBigBtn)
 .use(GoodsActionMiniBtn).use(PullRefresh).use(List).use(Row).use(Col).use(Toast).use(CellGroup).use(Field).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs)

import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
