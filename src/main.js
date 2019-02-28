import Vue from 'vue';
import App from './App.vue';
import router from './router';

/* 引入数字滚动插件 */
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
