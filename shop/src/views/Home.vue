<template>
  <div class="container">
    <van-nav-bar title="商城" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon slot="right" @click="$router.push('/myhome')">{{JSON.stringify(userInfo)==='{}'?'未登录':userInfo.userName}}</van-icon>
    </van-nav-bar>
  <!-- 轮播图 -->
   <div class="carousel">
     <van-swipe :autoplay="5000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
     </van-swipe>
   </div>

<!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper  class="hot-swiper" :options="swiperOption" >
            <swiper-slide v-for="(item,index) in hotProducts" :key="index"> 
              <div class="hot-swiper-content">
                  <img :src="item.img" alt="">
                  <div>{{item.name}} {{item.city}}</div>
                  <div>{{item.company}}</div>
                  <div>价格：￥{{item.price}}</div>
              </div>
            </swiper-slide>
    
      </swiper>
    </div>
<!-- 推荐商品 -->
    <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
          <img :src="item.img" alt="">
           <p>{{item.name}}</p>
           <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'
import{mapState} from "vuex"

export default {
     data(){
       return{
         carouselItem:[//轮播图
           {
             imgSrc:'http://img2.imgtn.bdimg.com/it/u=4258074158,3709166302&fm=26&gp=0.jpg'
           },{
             imgSrc:'http://img2.imgtn.bdimg.com/it/u=1101079303,1307471305&fm=26&gp=0.jpg'
            },{
             imgSrc:'http://img4.imgtn.bdimg.com/it/u=1681237413,285535555&fm=26&gp=0.jpg'
           }
         ],
         hotProducts:[//热门商品
           {
             name: "毛衣",
             img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2587555279,2526733704&fm=27&gp=0.jpg",
             price: "200",
             company: "优衣库",
             city: "杭州市"
           },{
             name: "夹克",
             img: "https://f12.baidu.com/it/u=61267448,4121426074&fm=72",
             price: "350",
             company: "七匹狼",
             city: "西安市"
           },{
             name: "卫衣",
             img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=601586730,1001265866&fm=26&gp=0.jpg",
             price: "120",
             company: "花花公子",
             city: "上海市"
           },{
             name: "外套",
             img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3407713217,4227414348&fm=26&gp=0.jpg",
             price: "210",
             company: "以纯",
             city: "北京市"
           },{
             name: "针织衫",
             img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2886206229,1345107126&fm=26&gp=0.jpg",
             price: "880",
             company: "阿迪达斯",
             city: "成都市"
           },{
             name: "T恤",
             img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=865812515,3763383033&fm=27&gp=0.jpg",
             price: "90",
             company: "蝶恋",
             city: "苏州市"
           }
         ],
         varietyItem:[
          //   {
          //    name: "毛衣",
          //    img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2587555279,2526733704&fm=27&gp=0.jpg",
          //    price: "200",
          //    company: "优衣库",
          //    city: "杭州市"
          //  },{
          //    name: "夹克",
          //    img: "https://f12.baidu.com/it/u=61267448,4121426074&fm=72",
          //    price: "350",
          //    company: "七匹狼",
          //    city: "西安市"
          //  },{
          //    name: "卫衣",
          //    img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=601586730,1001265866&fm=26&gp=0.jpg",
          //    price: "120",
          //    company: "花花公子",
          //    city: "上海市"
          //  },{
          //    name: "外套",
          //    img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3407713217,4227414348&fm=26&gp=0.jpg",
          //    price: "210",
          //    company: "以纯",
          //    city: "北京市"
          //  },{
          //    name: "针织衫",
          //    img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2886206229,1345107126&fm=26&gp=0.jpg",
          //    price: "880",
          //    company: "阿迪达斯",
          //    city: "成都市"
          //  },{
          //    name: "T恤",
          //    img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=865812515,3763383033&fm=27&gp=0.jpg",
          //    price: "90",
          //    company: "蝶恋",
          //    city: "苏州市"
          //  }
         ],
         swiperOption:{
           slidesPerView:3
         }
       }
     },
     components: {
        swiper,
        swiperSlide
      },
     created(){
      //  let url1='http://www.linda.com/getvarietyItem';
      let url1=url.getVarietyItem;

           axios.get(url1).then(res=>{
                this.varietyItem=res.data;
           });
         },
         computed:{
           ...mapState(['userInfo'])
         }
};
</script>

<style lang="scss" scoped>
.container{
  background: #EEEEBB;
}
.nav-title{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  // z-index:999 !important;
}
.carousel{
  height: 4rem;
  margin-top:46px;
  
  &-item{
    img{
      // width: 100%;
      height: 4rem;
    }
  }
}

.hot{
  margin-top: 0.2rem;
  background: #ffffff;
  &-title{
   width: 100%;
   height: 0.5rem;
   padding-left: 0.2rem;
   line-height: 0.5rem;
   text-align: center;
   box-sizing: border-box;
  }
  &-swiper{
    &-content{
      width: 2rem;
      text-align: center;
      img{
        width: 2rem;
        height: 2rem;
      }
    }
  }
}

.variety{
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  background: #ffffff;
  text-align: center;
  ul{
    display: flex;
    flex-wrap: wrap;//弹性盒模型换行
    justify-content: space-around;//水平居中
  }
  &-item{
    flex-basis: 45%;
  }
  img{
    width: 2rem;
    height: 2rem;
  }
}
</style>


