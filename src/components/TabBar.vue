<template>
  <nav class="tabBar">
    <tab-item 
      v-for="(item,index) in navList" 
      :path="item.path"
      :icon="item.icon"
      :label="item.label"
      >      
    </tab-item>
  </nav>   
</template>
<script>
import TabItem from './TabItem'
export default{
  data(){
    return {
      navList:[
        {
          path: '/',
          icon: 'home',
          label: '首页'
        },
        {
          path: '/list',
          icon: 'cny',
          label: '投资'
        },
        {
          path: '/more',
          icon: 'th-large',
          label: '更多'
        },
        {
          path: '/user',
          icon: 'user-o',
          label: '我的'
        }
      ]
    }
  },
  components: {
    TabItem
  }
}
</script>
<style lang="scss">
@mixin prefix($map, $vendors: moz ms webkit o) {
  @each $prop, $value in $map {
        @if $vendors {
          @each $vendor in $vendors {
            #{"-" + $vendor + "-" + $prop}: #{$value};
          }
        }
        // Dump regular property anyway
        #{$prop}: #{$value};
  }
}
.tabBar
{
  bottom: 0;
  left: 0;

  display: block;  
  table-layout:fixed;
  border-top: 1px solid #ddd;
  background-color: #fff;
  z-index: 10;
  @include prefix((box-shadow: 0 0 2px 0 rgba(155,143,143,0.6)));
}
</style>