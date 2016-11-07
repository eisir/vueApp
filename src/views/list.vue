<template>
  <div>
    list
  </div>
</template>

<script>

export default {
  beforeCreate(){
    this.$store.commit('changeTop','1');
    this.$store.commit('changeTab','0');
  }
}
</script>

<style>
</style>
