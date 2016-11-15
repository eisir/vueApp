<template>
  <div id="app">
    <div class="wrapper">
      <router-view class="view-container"></router-view>
      <tab-bar v-if="isTab"></tab-bar>
    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import TabBar from './components/TabBar'

export default {
  name: 'app',
  components: {
    TabBar
  },
  computed:{    
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
  color: #2c3e50;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  flex:1;
}

</style>
