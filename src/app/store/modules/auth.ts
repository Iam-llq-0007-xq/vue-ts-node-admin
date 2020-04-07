import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import { Route as RouteConfig } from '@/app/interface/router';
import { constantRoutes, asyncRouters } from '@/app/app.router';
import { StoreStateService } from '@/app/store.state.service';
import store from '@/app/store';

export interface Routes {
  routes: RouteConfig[];
  dynamicRoutes: RouteConfig[];
}

@Module({ dynamic: true, store, name: 'auth' })
class Auth extends VuexModule implements Routes {
  public routes: RouteConfig[] = [];
  public dynamicRoutes: RouteConfig[] = [];

  @Action
  public GenerateRoutes(accessedRoutesNames: string[]) {
    const accessedRoutes: RouteConfig[] = filterAsyncRoutes(asyncRouters, accessedRoutesNames);
    this.SET_ROUTES(accessedRoutes);
  }

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes);
    this.dynamicRoutes = this.routes;
  }
}

function hasPermission(routesNames: string[], route: RouteConfig): boolean {
  return route.name ? routesNames.includes(route.name) : true;
}

function filterAsyncRoutes(routes: RouteConfig[], routesNames: string[]): RouteConfig[] {
  const res: RouteConfig[] = [];

  routes.forEach((route: RouteConfig) => {
    const tmp: any = { ...route };
    if (hasPermission(routesNames, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, routesNames);
      }

      res.push(tmp);
    }
  });

  return res;
}

export const AuthModule = getModule(Auth);
