import { Route } from '@/app/interface/router';
import Layout from '@/app/layout/index.vue';
const router: Route[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/admin',
    hidden: true,
    alwaysShow: true,
    children: [
      {
        path: 'admin',
        name: 'admin',
        meta: {
          title: 'admin',
        },
      },
    ],
  },
];

export default router;
