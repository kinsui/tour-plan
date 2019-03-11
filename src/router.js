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
  // 路由进入前检查是否运行在移动端，如果不是则进入"/pc"，注意next()如果使用了参数则表示中断当前路由开始一个新的路由，所以要注意死循环问题
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // 运行在移动端时禁止进入"/pc"路由
    if (to.path === '/pc') {
      next({
        path: '/',
        replace: true,
      });
    } else {
      next();
    }
  } else if (to.path === '/pc') {
    next();
  } else {
    next({
      path: '/pc',
      replace: true,
    });
  }
});

export default router;
