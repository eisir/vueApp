export default {
  state: {
    count: 0,
    iconName:'fa',
    isTop:1,
    isTab:1,
    isLogin:false
  },
  mutations:{
    changeTop(state,n){
      state.isTop = n;
    },
    changeTab(state,n){
      state.isTab = n;
    },
    login(state){
      state.isLogin = true ;
    },
    increment(state,n){ 
      n?state.count += n.amount : state.count ++
    },

  }
}