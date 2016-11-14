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
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
          img: '/static/images/banner01.jpg',
          title: '如何手制一份秋意的茶？'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
          img: '/static/images/banner02.jpg',
          title: '茶包VS原叶茶'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
          img: '/static/images/banner03.jpg',
          title: '播下茶籽，明春可发芽？'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
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
  width: 100%;
  margin: 0;
  background: #f5f5f5;
}
.swiper-container{
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.swiper-slide{
  text-align: center;
  font-size: 0;
}
.swiper-slide img{
  width: 100%;
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
