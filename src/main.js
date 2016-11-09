import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


import App from './App'

import routeConfig from './router/index'
import storeConfig from './store/index'

Vue.use(ElementUI)


Vue.use(VueResource)
Vue.http.options.root = '/static'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
Vue.http.options.emulateJSON = true

Vue.use(Vuex)
const store = new Vuex.Store(storeConfig)

Vue.use(VueRouter)
const router = new VueRouter(routeConfig)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  ...App
}).$mount('#app')
