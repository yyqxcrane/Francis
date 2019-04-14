<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="container">
       <van-card v-for="(item, index) in productList" :key="index" :price="item.price" :desc="item.company"  :title="item.name"  :thumb="item.img">
            <div slot="footer">
                <van-button size="mini" @click="delCart(item._id,index)">删除</van-button>
            </div>
       </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios';
import url from '@/service.config.js';

export default {
  data(){
      return{
        // imageURL:'http://img2.imgtn.bdimg.com/it/u=4258074158,3709166302&fm=26&gp=0.jpg',
        productList:[]
      }
  },
      computed:{
        ...mapState(['userInfo']),
        totalPrice(){//写一个check-box
            return this.productList.reduce((sum,elem)=>{
              sum+=elem.price;
              return sum
            },0)*10*10;

        }
      },
     created(){
       //验证用户是否登录
       if(JSON.stringify(this.userInfo)==='{}'){
              this.$toast.fail('请先登录');
              this.$router.push('/myhome');
       }else{
         console.log(this.userInfo);
         
         axios({
            url:url.getCart,
            method:'get',
            params:{
              userId:this.userInfo._id
            }
         }).then(res=>{
            for(let item of res.data){
              this.productList.push(item.productId);
              // console.log(res.data);
              
            }
         }).catch(err=>{
           console.log(err);
         })
       }
     },
     methods:{
       onSubmit(){
         this.$toast.success('进入付款页面');
       },
       delCart(id,index){    //还需要修改，怎么把数据库里面的数据删除
         axios({
             url:url.delCart,
             method:'get',
             params:{
                productId:id,
             }
         }).then(res=>{
             //删除数据库里面的数据(还没写)，如果删除成功，进入回调函数，在回调函数中，如下
             this.productList.splice(index,1);
             console.log(res);
             
         }).catch(err=>{
              console.log(err);
              
         })
       }
     }
}
</script>

<style lang="scss" scoped>
.container{
  margin-bottom: 2rem;
}
.submit-bar{
  margin-bottom: 1rem;
}
</style>

