<template>
  <div>
    <top-bar
      :left="isLogin"
      leftPath="/login"
      title="首页"
      leftlabel="登录"
      rightlabel=""
      rightPath="/"
      v-if="isTop">
    </top-bar>
   
    <div class="container">
      <!-- banner-swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in list">
            <img :src="item.img">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- total data -->
      <div class="index-number">
        <nav class="nav-inner">
          <a href="http://www.qhwwd.com/financial/index.html">
            <img src="/static/images/index_05.png">
            <span>平台数据</span>
          </a>
          <a href="http://www.qhwwd.com/financial/index.html">
            <img src="/static/images/index_07.png">
            <span>安全保障</span>
          </a>
          <router-link to="/user">
            <img src="/static/images/Sign.png">
            <span>每日签到</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import TopBar from '../components/TopBar'

export default {
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
  beforeCreate(){
    this.$store.commit('changeTop',1);
    this.$store.commit('changeTab',1);

  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container',{
      autoplay: 5000,//可选选项，自动滑动
      loop : true, // 循环
      pagination : '.swiper-pagination'
    });
  },
  components: {
    TopBar
  },
  computed:{
    isTop(){      
      return this.$store.state.isTop;
    },
    isLogin(){
      return !this.$store.state.isLogin;
    }
  },
  methods: {
    update(){
    }
  }
}

</script>

<style lang="scss" scoped>
@import '~swiper/dist/css/swiper.css';
.container{
  display: block;
  width: 100%;
  position: relative;
  margin: 0;
  background: #f5f5f5;
}
.swiper-container {
    width: 100%;
    margin: 0 auto;
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


.nav-inner{
  display: flex;
  flex-direction: row;
  padding: 0.25rem 0;
  background: #fff;
  a{
    display: block;
    flex:1;
    line-height: 0.5rem;
    border-right: 1px solid #ddd;
    text-align: center;
    color: #999;
    font-size: 0.4375rem;
    img{
      width: 0.625rem;
      vertical-align: middle;
    }
    &:last-child{
      border:none;
    }
  }
}
</style>
