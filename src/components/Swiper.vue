<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list">
        <img :src="item.img">
        <!-- {{index}} -->

      </div>
    </div>
  </div> 
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
export default{
  data(){
    return {
      list: [
        {
          url: '/01',
          img: '/static/images/banner01.jpg',
          title: '如何手制一份秋意的茶？'
        }, {
          url: '/01',
          img: '/static/images/banner02.jpg',
          title: '茶包VS原叶茶'
        }, {
          url: '/01',
          img: '/static/images/banner03.jpg',
          title: '播下茶籽，明春可发芽？'
        }, {
          url: '/01',
          img: '/static/images/banner04.jpg',
          title: '播下茶籽，明春可发芽？'
        }
      ]
    }
  },
  mounted(){
    var swiper=new Swiper('.swiper-container');
  },
}
</script>
<style>
.container{
  display: block;
  width: 100%;
  position: relative;
}
.swiper-container {
  flex: 1;
    width: 100%;
    height: 300px;
    /*margin: 20px auto;*/
}
.swiper-slide>img{
  width: 100%;
  flex: 1;
}
.swiper-container>.swiper-wrapper{
  /*flex-direction: column;*/
  flex-wrap: nowrap;
}
.swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>