<template>
  <div>
    <top-bar
      :left="false"
      rightPath="/">
      <h1 class="title">
        项目列表
      </h1>
    </top-bar>
     <div class="container">
      <div class="items">
        <div class="item" v-for="item in listData">
          <a href="">
            <div class="cont">
              <div class="cont-l">
                <h3 class="profit">
                  {{ (item.profit * 100).toFixed(2) }}
                  <span>%</span>
                </h3>
                <div class="data">
                  <span class="time">期限：{{ item.time }}</span>
                  <span class="total">融资：{{ item.getTotal }}元</span>
                </div>
              </div>
              <div class="cont-r">
                <p>{{ item.time }}</p>
                <p>立即投标</p>
              </div>
            </div>
            <div class="title">
              <span class="label-img">
                <img :src="item.imgIcon" />
              </span>{{item.name}}
              <div class="profitType">即投即计息</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import 'vue-swipe/dist/vue-swipe.css'
export default {
  data(){
    return {
      listData: [
        {
          profit: 0.14,
          time: '60天',
          getTotal: '190121',
          name: '酒商贷20161115002',
          complete: 0.53,
          imgIcon: '/static/images/wine.png'
        }
      ]
    }
  },
  components:{
    TopBar
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/list.scss';
</style>
