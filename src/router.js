import Vue from 'vue';
import Router from 'vue-router';
import index from './views/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('@/views/thanks'),
    },
    {
      path: '/testAlias',
      name: 'testAlias',
      component: () => import('testAlias/index'),
    },
  ],
});
