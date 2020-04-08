import { Route } from '@/app/interface/router';
import Layout from '@/app/layout/index.vue';
import Admin from './admin.vue';
const router: Route[] = [
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/index',
    meta: {
      title: '一级Admin',
    },
    children: [
      {
        path: 'index',
        name: 'Admin',
        component: Admin,
        meta: {
          title: 'admin',
          hidden: false,
        },
      },
      {
        path: 'D2',
        name: 'D2',
        component: Admin,
        meta: {
          title: 'D2',
          hidden: false,
        },
      },
    ],
  },
];

export default router;
