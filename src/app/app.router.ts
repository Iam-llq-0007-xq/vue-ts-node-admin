import Vue from 'vue';
import VueRouter from 'vue-router';
import { Route, RouterConfig } from '@/app/interface/router';
import Layout from './layout/index.vue';
import Login from './pages/login/login.router';
import Dashboard from './pages/dashboard/dashboard.router';
import Redirect from './pages/redirect/redirect.router';
import errorPages from './pages/error-pages/errorPages.router';
import Admin from './pages/admin/admin.router';

Vue.use(VueRouter);

export const constantRoutes: Route[] = [...Redirect, ...Login];

export const asyncRouters: Route[] = [
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true,
    alwaysShow: false,
  },
  ...Dashboard,
  ...Admin,
  ...errorPages,
];

const createRouter = (): RouterConfig =>
  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter(): void {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
