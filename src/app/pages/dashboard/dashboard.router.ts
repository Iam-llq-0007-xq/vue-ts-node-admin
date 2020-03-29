import { Route } from '@/types';
import Layout from '@/layout/index.vue';
const router: Route[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    alwaysShow: true,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
        },
      },
    ],
  },
];

export default router;
