import { RouteConfig, RouterOptions, VueRouter } from 'vue-router/types/router'
export interface RouterConfig extends VueRouter {
  matcher?: any;
}

export interface ChildRoute extends RouteConfig {
  hidden?: boolean;
  alwaysShow?: boolean;
  redirect?: 'noRedirect' | string;
  name: string;
  meta: {
    title: string;
    icon?: string;
    noCache?: boolean;
    breadcrumb?: boolean;
    activeMenu?: string;
  };
}

export interface Route extends RouteConfig {
  hidden: boolean;
  alwaysShow: boolean;
  redirect?: 'noRedirect' | string;
  name?: string;
  meta?: {
    title: string;
    icon?: string;
    noCache?: boolean;
    breadcrumb?: boolean;
    activeMenu?: string;
  };
  children?: ChildRoute[];
}
