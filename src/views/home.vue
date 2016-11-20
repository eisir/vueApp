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
          <div class="swiper-slide" v-for="item in bannerList">
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

      <!-- recommend -->
      <div class="index-card">
        <div class="card-head">
          {{ recommendData.name }}
        </div>
        <div class="card-content">
          <div class="profit">
            <h3>
              {{ recommendData.profit * 100 }}
              <span>%</span>
            </h3>
            <p class="tip">预期年化收益</p>
          </div>    
          <div class="sub-title">即投即计息</div>
          <div class="data">
            <div class="item">
              <p>{{ recommendData.time }}</p>
              <span>项目期限</span>
            </div>
            <div class="item">
              <p>{{ recommendData.getTotal }}元</p>
              <span>融资金额</span>
            </div>
            <div class="item">
              <p>{{ recommendData.remain }}元</p>
              <span>剩余可投</span>
            </div>
          </div>
          <div class="submit-btn">立即投标</div>
          <div class="tip">风险准备金为投资保驾护航</div>
        </div>
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
      bannerList: [
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
      ],
      recommendData: {
        name: "酒商贷20161115002",
        profit: 0.142,
        time: "60天",
        getTotal: "194850",
        remain: "65364"
      }
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

.index-card{
  margin: 0.25rem 0;
  background-color: #fff;
  .card-head{
    text-align: center;
    line-height: 1.75rem;
    border-bottom: 1px solid #ddd;
  }
  .card-content{
    text-align: center;
    padding: 0.5rem 0;
    .sub-title{
      color:#ff7301;
      margin: 0 auto;
      width: 3rem;
      border: 1px solid #ff7301;
      font-size: 0.125rem;
      border-radius:1rem;
      line-height: 0.75rem;
    }
    h3{
      font-size: 1.5rem;
      font-weight: normal;
      color: #ff7301;
      >span{
        font-size: .75rem;
      }
    }
    .tip{
      color: #999;
      font-size: 0.5rem;
    }
    .data{
      display: flex;
      flex-direction: row;
      margin: 0.5rem 0;
      .item{
        flex:1;
        text-align: center;
        span{
          color: #999;
        }
      }
    }
    .submit-btn{
      margin: 0 1rem;
      background-color: #1a98ff;
      border-radius: 0.25rem;
      line-height: 1.5rem;
      color: #fff;
      font-weight: bold;
      font-size: 0.75rem;
    }
  }
}
</style>
