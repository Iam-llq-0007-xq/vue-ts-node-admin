import { Route } from '@/app/interface/router';
import Layout from '@/app/layout/index.vue';
import Dashboard from './dashboard.vue';
const router: Route[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: false,
    alwaysShow: true,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          title: '首页',
        },
      },
    ],
  },
];

export default router;
