import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'global',
    redirect: {
      name: 'login'
    },
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
  }
  // {
  //   path: '*',
  //   component: () => import('@/views/pages/Error404.vue')
  // }
];

export default routes;
