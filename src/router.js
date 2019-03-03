import Vue from 'vue';
import Router from 'vue-router';
import index from './views/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '长沙长沙',
      },
    },
    {
      path: '/train',
      name: 'train',
      component: () => import('@/views/train'),
      props: true,
      meta: {
        title: '铁路畅行',
      },
    },
    {
      path: '/tour',
      name: 'tour',
      component: () => import('@/views/tour'),
      meta: {
        title: '美丽长沙',
      },
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('@/views/thanks'),
      meta: {
        title: '感谢观看',
      },
    },
    {
      path: '/pc',
      name: 'pc',
      component: () => import('@/views/pc'),
      meta: {
        title: '请使用手机扫码浏览',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || '长沙之旅';
  }
  next();
});

export default router;
