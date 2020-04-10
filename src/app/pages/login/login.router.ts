import { Route } from '@/app/interface/router';
import Login from './login.vue';

const router: Route[] = [
  {
    path: '/login',
    name: '/login',
    component: Login,
    meta: {
      hidden: true,
    },
  },
];

export default router;
