export interface Route {
  hidden: boolean;
  alwaysShow: boolean;
  redirect: 'noRedirect' | string;
  name: string;
  meta: {
    title: string;
    icon: string;
    noCache?: boolean;
    breadcrumb?: boolean;
    activeMenu: string;
  };
  children: Route[];
}
