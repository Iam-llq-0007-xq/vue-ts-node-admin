import { Route } from '@/app/interface/router';
import Layout from '@/app/layout/index.vue';
import Redirect from './redirect.vue';

const router: Route[] = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    alwaysShow: false,
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'redirect',
        component: Redirect,
        meta: {
          title: 'redirect',
        },
      },
    ],
  },
];

export default router;
