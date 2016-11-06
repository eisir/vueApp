export default {
  state: {
    count: 0,
    iconName:'fa'
  },
  mutations:{
    increment(state,n){ 
      n?state.count += n.amount : state.count ++
    }
  }
}