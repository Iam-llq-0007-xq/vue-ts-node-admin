import { Route } from '@/app/interface/router';

const router: Route[] = [{ path: '*', redirect: '/404', hidden: true, alwaysShow: false }];

export default router;
