<template>
  <nav class="topBar">
    <router-link :to="leftPath" :title="title" class="topLeft">
      <span class="icon fa fa-angle-left fa-2x">{{leftlabel}}</span>      
    </router-link>
    <div class="topLayout">
      <h1 class="title">
        {{ title }}
      </h1>
    </div>
    <div class="topRight">
      <span class="icon fa fa-plus">{{leftlabel}}</span>
    </div>
  </nav>   
</template>
<script>
export default{
  data(){
    return {
      leftlabel:""
    }
  },
  props:{
    title:'',
    leftPath:'',

  }
}
</script>
<style lang="scss">
.topBar
{
    top: 0;
    left: 0;

    display: block;
    height: 1.5rem;
    border-bottom: 1px solid #ddd;
    justify-content: center;
    line-height: 1.5rem;
    position: relative;
}
.topLayout{
  margin: 0 1.4rem;
}
.title{
  margin:0;
  font-size: 0.625rem;
}
.topLeft{
  position: absolute;
  width: 1.4rem;
  height: 1.5rem;
  left: 0;
  top : 0;
  font-size: 0.5rem;
  .icon{
    line-height:1.5rem;    
  }
}
.topRight{
  position: absolute;
  width: 1.4rem;
  height: 1.5rem;
  right: 0;
  top : 0;
}
</style>