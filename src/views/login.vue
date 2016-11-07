<template>
  <div class="container">
    <div class="close-icon fa fa-times"></div>
    <section>
      <div class="logo">logo</div>
    </section>
  </div>  
</template>

<script>

export default {
  beforeCreate(){
    this.$store.commit('changeTop',0);
    this.$store.commit('changeTab',0);
  }
}
</script>

<style scoped>
.close-icon{
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>
