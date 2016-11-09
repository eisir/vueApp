<template>
  <div>
    <top-bar
      leftPath="/login"
      title="首页"
      leftlabel="登录"
      rightlabel="充值"
      rightPath="/"
      v-if="isTop">
    </top-bar>
    <div class="container">
      isTop
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'

export default {
  beforeCreate(){
    this.$store.commit('changeTop',1);
    this.$store.commit('changeTab',1);
  },
  components: {
    TopBar
  },
  computed:{
    isTop(){      
      return this.$store.state.isTop;
    }
  },
  methods: {
    update(){
    }
  }
}
</script>

<style>
</style>
