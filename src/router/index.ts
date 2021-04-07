import { route } from 'quasar/wrappers';
import VueRouter from 'vue-router';
import { Store } from "vuex";
import { StateInterface } from '../store';
import routes from './routes';
import Vue from 'vue'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */
Vue.use(VueRouter);
export default route<Store<StateInterface>>(function ({ Vue }) {
  

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  // 路由钩子
  Router.beforeEach((to, form, next) => {
    next()
  })

  return Router;
})
