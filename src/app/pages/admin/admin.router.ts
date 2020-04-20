import { Route } from '@/app/interface/router';
import Layout from '@/app/layout/index.vue';
import Admin from './admin.vue';
const router: Route[] = [
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/menu1-1',
    meta: {
      title: 'menu1',
      iconName: 'el-icon-s-custom',
    },
    children: [
      {
        path: 'menu1-1',
        name: 'Admin1-1',
        component: Admin,
        meta: {
          title: 'menu1-1',
          hidden: false,
        },
      },
      {
        path: 'menu1-2',
        name: 'Admin1-2',
        component: Admin,
        redirect: '/admin/menu1-2/menu2-1',
        meta: {
          title: 'menu1-2',
          hidden: false,
        },
        children: [
          {
            path: 'menu2-1',
            name: 'Admin2-1',
            component: Admin,
            meta: {
              title: 'menu2-1',
              hidden: false,
            },
          },
        ],
      },
      {
        path: 'menu1-3',
        name: 'Admin1-3',
        component: Admin,
        redirect: '/admin/menu1-3/menu3-1',
        meta: {
          title: 'menu1-3',
          hidden: false,
          alwaysShow: true,
        },
        children: [
          {
            path: 'menu3-1',
            name: 'Admin3-1',
            component: Admin,
            meta: {
              title: 'menu3-1',
              hidden: false,
            },
          },
        ],
      },
    ],
  },
];

export default router;
