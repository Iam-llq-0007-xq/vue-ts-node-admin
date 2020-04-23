import { Route } from '@/app/interface/router';
import Login from './login.vue';

const router: Route[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hidden: true,
    },
  },
];

export default router;
