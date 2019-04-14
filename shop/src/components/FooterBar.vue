<template>
      <van-tabbar v-model="active" @change="change">
        <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="coupon-o" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/myhome">我的</van-tabbar-item>
      </van-tabbar>
</template>

 <script>
 export default {
     data(){
        return{
           active:0
        }
     },
     created(){
        this.active=parseInt(localStorage.getItem('active'));
     },
     methods:{
         change(active){
             localStorage.setItem('active',active);
         }
     }
 }
 </script>

 <style scoped>
 
 </style>
 
 
 