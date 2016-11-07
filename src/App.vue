<template>
  <div id="app">
    <div class="wrapper">
      <top-bar
      leftPath="/login"
      title="首页"
      leftlabel="登录"
      rightlabel="充值"
      rightPath="/"
      v-if="isTop"></top-bar>
      <div class="view-container">
        <router-view></router-view>
      </div>
      <tab-bar v-if="isTab"></tab-bar>
    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import TabBar from './components/TabBar'
import TopBar from './components/TopBar'

export default {
  name: 'app',
  components: {
    TabBar,TopBar
  },
  computed:{
    isTop(){      
      return this.$store.state.isTop;
    },
    isTab(){
      return this.$store.state.isTab;
    }
  }
}
</script>
<style lang="scss">
@import './assets/scss/layout.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  max-width: 600px;
  flex:1;
}

</style>
