import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mint-ui 
import MintUI from "mint-ui"
//引入样式文件
import "mint-ui/lib/style.css" 
//引入axios
import axios from "axios"
//配置访问服务器的基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//配置session
axios.defaults.withCredentials=true
//注册
Vue.prototype.axios=axios
Vue.use(MintUI)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
