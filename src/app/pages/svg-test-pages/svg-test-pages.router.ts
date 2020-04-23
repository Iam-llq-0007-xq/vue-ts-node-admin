import { Route } from '@/app/interface/router';
import Layout from '@/app/layout/index.vue';
import SvgTestPages from './svg-test-pages.vue';
const router: Route[] = [
  {
    path: '/svg-test-pages',
    component: Layout,
    redirect: '/svg-test-pages/index',
    name: 'SvgTestPages',
    meta: {
      title: 'svg测试页',
      hidden: false,
      alwaysShow: true,
      iconName: 'svg-menu-svg-test',
    },
    children: [
      {
        path: 'index',
        name: 'SvgTestPages/index',
        component: SvgTestPages,
        meta: {
          title: 'svg测试页',
          hidden: false,
          iconName: 'svg-example',
        },
      },
    ],
  },
];

export default router;
