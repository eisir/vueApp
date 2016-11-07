<template>
  <div>login</div>
</template>

<script>

export default {
  beforeCreate(){
    this.$store.commit('changeTop',0);
    this.$store.commit('changeTab',0);
  }
}
</script>

<style>
</style>
