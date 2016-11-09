<template>
  <router-link :to="path" class="tabItem" active-class="active" exact>
    <span class="icon" :class="[iconName,iconClass]"></span>
    <div class="tab-label">
      {{ label }}
    </div>
  </router-link>
</template>
<script>
export default{
  props: {
    path : '',
    icon : '',
    label : ''
  },
  computed : {
    iconName(){
      return this.$store.state.iconName
    },
    iconClass(){
      return `${this.$store.state.iconName}-${this.icon}`
    }
  }
}
</script>
<style lang="scss">
.tabItem{
  display: table-cell;
  width: 1%;
  height: 1.5rem;
  color: #42b983;
  font-size: .375rem;
  vertical-align: middle;
  text-align: center;
  &.active{
    color: #00a0e9;
  }
  .icon{
    font-size: .75rem;
    margin-bottom: 2px
  }
}
</style>