import { Route } from '@/app/interface/router';

const router: Route[] = [
  {
    path: '*',
    redirect: '/404',
    name: '404',
    meta: {
      hidden: true,
    },
  },
];

export default router;
