<template>
  <div id="app">

    <!-- <keep-alive> 全部都被缓存-->
        <!-- <router-view></router-view> -->
        <!-- <router-view v-if="$route.meta.keepAlive"></router-view>  //只缓存想缓存的，用true,下面那个刚好相反的
        <router-view v-if="!$route.meta.keepAlive"></router-view> -->  
    <!-- </keep-alive> -->
    <router-view></router-view>
    <router-view name="footer-bar"></router-view>
      <!-- <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="coupon-o" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/myhome">我的</van-tabbar-item>
      </van-tabbar> -->
    <!-- <footer-bar></footer-bar> -->
  </div>
</template>

<script>
// import FooterBar from '@/components/FooterBar.vue';
export default {
    // components:{
    //    FooterBar
    // }
}
</script>


<style lang="scss">
    // .footer-bar{
    //   display: flex;
    //   background: #eeeeee;
    //   position: fixed;
    //   bottom:0;
    //   width: 100%;
    //   height: 1rem;
    //   line-height: 1rem;
    //   &-item{
    //     flex-grow: 1;
    //     text-align: center;
    //   }
    // }  

</style>
