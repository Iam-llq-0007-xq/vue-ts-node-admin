import { RouteConfig, RouterOptions, VueRouter } from 'vue-router/types/router';

export interface RouterConfig extends VueRouter {
  matcher?: any;
}

export interface ChildRoute extends RouteConfig {
  redirect?: 'noRedirect' | string;
  name: string;
  meta: {
    title?: string;
    hidden?: boolean;
    alwaysShow?: boolean;
    noCache?: boolean;
    breadcrumb?: boolean;
    activeMenu?: string;
    iconName?: string;
  };
}

export interface Route extends RouteConfig {
  redirect?: 'noRedirect' | any;
  name?: string;
  meta?: {
    hidden?: boolean;
    alwaysShow?: boolean;
    title?: string;
    noCache?: boolean;
    breadcrumb?: boolean;
    activeMenu?: string;
    iconName?: string;
  };
  children?: ChildRoute[];
}
