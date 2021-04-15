import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'global',
    redirect: {
      name: 'login'
    },
    component: () => import('@/views/pages/index'),
    children: [
      // { path: '', component: () => import('@/views/pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/login',
    name:'login',
    component: () => import('@/views/pages/login')
  },
  {
    path: '/page1',
    name:'page1',
    component: () => import('@/views/pages/page1')
  },
  {
    path: '/page2',
    name:'page2',
    component: () => import('@/views/pages/page2')
  }
  // {
  //   path: '*',
  //   component: () => import('@/views/pages/Error404.vue')
  // }
];

export default routes;
