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
      <swiper :list="list" auto></swiper>
    </div>
  </div>
</template>

<script>
import swiper from 'vux/src/components/swiper'
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
  components: {
    TopBar,
    swiper
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

<style>
@import '~vux/dist/vux.css';
</style>
