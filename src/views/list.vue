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
      isTop
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
export default {
  beforeCreate(){    
    this.$store.commit('changeTab','1');
  },
  components:{
    TopBar
  }
}
</script>

<style>
</style>
