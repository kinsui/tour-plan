import Vue from 'vue';
import { VueTyper } from 'vue-typer';
import VueFriendlyIframe from 'vue-friendly-iframe';
import moneyCal from './views/moneyCal.vue';
import App from './App.vue';
import router from './router';

/* 引入公共组件 */
Vue.component(VueTyper.name, VueTyper);
Vue.component(moneyCal.name, moneyCal);
Vue.component('vue-friendly-iframe', VueFriendlyIframe);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
