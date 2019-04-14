<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category">
         <van-row>
           <van-col span="6" class="nav">
             <ul>
               <li @click="select(item.typeId,index)" :class="{active:active==index}" v-for="(item,index) in types" :key="index">
                 {{item.typeName}}
               </li>
             </ul>
           </van-col>
           <van-col span="18" class="container">
             <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list class="content" @load="onLoad" :finished="finished">
                      <div @click="goDetail(item._id)" class="content-shop" v-for="(item,index) in productList" :key="index">
                          <img :src="item.img" alt="">
                          <p class="content-shop-name">{{item.name}} </p>
                          <p>￥{{item.price}} </p>
                      </div>
                </van-list>
             </van-pull-refresh>
             
           </van-col>
         </van-row>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import url from '@/service.config.js'
export default {
  data(){
     return{
       types:[],//类型信息
       active:0,
       productList:[],
       typeId:1 ,  //当前选中类型的id
       start:0,
       limit:10,
       finished:false, //是否数据取完
       isLoading:false  //上啦加载
     }
  },
  created(){
    axios({
      url:url.getTypes
    }).then(res=>{
      // console.log(res);
      this.types=res.data;
      this.select(this.typeId,this.active);
      
    }).catch(err=>{
      console.log(err);
      
    });
  },
  methods:{
    select(typeId,index){
      this.active=index;
      this.typeId=typeId;
      this.productList=[];
      this.finished=false;
      this.getProductList();
    },
    getProductList(){
      this.isLoading=true;
      axios({
        url:url.getProductByType,
        method:'get',
        params:{
          typeId:this.typeId,
          start:this.productList.length,
          // start:this.start,
          limit:this.limit
        }

      }).then(res=>{
        // console.log(res);
        if(res.data.length!=0){
           this.productList=this.productList.concat(res.data);
        }else{
          this.finished=true;
        }
        this.isLoading=false;
        // this.productList=res.data;
      }).catch(err =>{
        console.log(err);
        
      })
    },
    onLoad(){
      setTimeout(()=>{
        this.getProductList();
      },2000)
      // this.getProductList();
    },
    onRefresh(){
      setTimeout(()=>{
          this.productList=[];
          this.getProductList();
      },2000)
    },
    goDetail(id){
      // this.$router.push('/path');
      this.$router.push({
        name:'detail',
        params:{
          id:id
        }
      })
      
    }
  }
}
</script>


<style lang="scss" scoped>

.nav{
  background: #eee;
  li{
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 5px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active{
    background: #e8ccff;
  }
}
.container{
  position: fixed;
  top:46px;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
  background: #fff;
}
.content{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  &-shop{
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img{
      width: 2rem;
      height: 2rem;
    }
    &-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>

