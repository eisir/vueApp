<template>
  <div>
    <top-bar
      leftPath="/home"
      title="注册"
      leftlabel=""
      right=false
      v-if="isTop">
    </top-bar>
    <div class="container">
      
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
export default {
  beforeCreate(){
    this.$store.commit('changeTop',1);
    this.$store.commit('changeTab',0);
  },
  components:{
    TopBar
  },
  computed:{
    isTop(){      
      return this.$store.state.isTop;
    }
  },
}
</script>

<style>
</style>
