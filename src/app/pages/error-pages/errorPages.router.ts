import { Route } from '@/types';

const router: Route[] = [{ path: '*', redirect: '/404', hidden: true, alwaysShow: false }];

export default router;
