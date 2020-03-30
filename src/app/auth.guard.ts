import router from './app.router';
import { RouteConfig } from './interface/router';
import { Message } from 'element-ui';
import { getToken } from './global.state';
import { asyncRouters } from './app.router';
import Nprogress from 'nprogress';
import 'nprogress.css';

const whiteList: string[] = [];
router.beforeEach(async (to, from, next) => {
  const hasToken: string | undefined = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      next('/');
    } else {
      const role = 'admin'
      const accessedRoutes = getRoutes(role);
      router.addRoutes(accessedRoutes);
      
      next({ ...to, replace: true })
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
});

function getRoutes(role: string): RouteConfig[] {
  const roleMaps: any = {
    admin: ['dashboard', 'admin'],
    developer: ['dashboard', 'developer'],
    editor: ['dashboard', 'editor'],
  };

  return generateRoutes(roleMaps[role]);
}

function generateRoutes(accessedRoutesNames: string[]): RouteConfig[] {
  let accessedRoutes: RouteConfig[] = filterAsyncRoutes(asyncRouters, accessedRoutesNames);
  return accessedRoutes;
}

function hasPermission(routesNames: string[], route: RouteConfig): boolean {
  return route.name ? routesNames.includes(route.name) : true;
}

function filterAsyncRoutes(routes: RouteConfig[], routesNames: string[]): RouteConfig[] {
  const res: RouteConfig[] = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(routesNames, tmp)) {
      if (tmp.children) tmp.children = filterAsyncRoutes(tmp.children, routesNames);

      res.push(tmp);
    }
  });

  return res;
}
