import { Route } from '@/app/interface/router';
import Layout from '@/app/layout/index.vue';
import Admin from './admin.vue';
const router: Route[] = [
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/index',
    hidden: true,
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: 'admin',
        component: Admin,
        meta: {
          title: 'admin',
        },
      },
    ],
  },
];

export default router;
