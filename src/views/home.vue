<template>
  <div class="container">
  </div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'

export default {
  beforeCreate(){
    this.$store.commit('changeTop',1);
    this.$store.commit('changeTab',1);
  },
  components: {
    Group,
    Cell
  },
  methods: {
    update(){
    }
  }
}
</script>

<style>
/*@import '~vux/dist/vux.css';*/
</style>
