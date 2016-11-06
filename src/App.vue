<template>
  <div id="app">
    <div class="wrapper">
      <top-bar leftPath="/" title="首页"></top-bar>
      <div class="view-container">
        <router-view></router-view>
      </div>
      <tab-bar ></tab-bar>
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
}

</style>
