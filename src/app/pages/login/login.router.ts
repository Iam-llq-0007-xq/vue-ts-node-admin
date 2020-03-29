import { Route } from '@/types';
import Login from './login.vue';

const router: Route[] = [
  {
    path: '/login',
    name: '/login',
    component: Login,
    hidden: true,
    alwaysShow: false,
  },
];

export default router;
