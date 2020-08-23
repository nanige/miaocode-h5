import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import request from "@/api/index";
import VueLazyLoad from "vue-lazyload";
import './vant'
import 'vant/lib/index.css';
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";

fundebug.apikey = "11570636f4d1c5337b61ec277873d92682ad774cc7b8b444748afa419a3cab00"

fundebugVue(fundebug, Vue);
Vue.config.productionTip = false

// 图片懒加载
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: "",
  loading: "",
  attempt: 1
});

Vue.prototype.$http = request;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
