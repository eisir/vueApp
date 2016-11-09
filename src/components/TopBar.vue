<template>
  <nav class="topBar">
    <router-link :to="leftPath" :title="title" class="topLeft" v-if="lShow">
      <span class="icon" v-if="leftlabel">{{leftlabel}}</span>
      <span class="icon fa fa-angle-left fa-2x" v-else></span>
    </router-link>
    <div class="topLayout">
      <slot>  
      <h1 class="title">
        {{ title }}
      </h1>
      </slot>
    </div>
    <div class="topRight" @click="rClick" v-if="rShow">    
      <span v-if="rightlabel">{{rightlabel}}</span>
      <span class="icon fa fa-plus" v-else></span>
    </div>
  </nav>   
</template>
<script>
export default{
  data(){
    return {
      
    }
  },
  props:{
    title:'',
    left:{
      default: true
    },
    leftPath:'',
    leftlabel:'',
    right:{
      default: true
    },
    rightPath: '',
    rightlabel: ''
  },
  computed:{
    lShow(){
      return this.left;
    },
    rShow(){
      return this.right;
    }
  },
  methods:{
    rClick(){
      this.$router.push(this.rightPath);
    }
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
    justify-content: center;
    line-height: 1.5rem;
    position: relative;
    background-color: #1a98ff;
    color: #fff;
    font-size: 0.562rem;
}
.topLayout{
  margin: 0 1.4rem;
}
.title{
  margin:0;
  font-size: 0.5rem;
  text-align: center;
}
.topLeft{
  position: absolute;
  width: 1.4rem;
  height: 1.5rem;
  left: 0;
  top: 0;
  font-size: 0.5rem;
  color: #fff;
  text-align: center;
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
  font-size: 0.5rem;
  text-align: center;
}
</style>