import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//状态池
    userInfo:{
      // userName:'未登录'
    }
  },
  getters:{//对数据的筛选，计算等等

  },
  mutations: {//改变state里面数据的唯一途径,不能有异步操作
     changeLogin(state,status){
       state.userInfo=status;
     }
  },
  actions: {//提交state改变状态,可以异步操作
      loginAction({commit},user){
           commit('changeLogin',user);
      }
  }
})
