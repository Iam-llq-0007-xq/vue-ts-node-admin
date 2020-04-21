import { Route } from 'vue-router';
import { Message } from 'element-ui';
import router from './app.router';
import { StoreStateService } from './store.state.service';
import { UserModule } from '@/app/store/modules/user';
import { AuthModule } from '@/app/store/modules/auth';

StoreStateService.removeToken();
let num = 0;

const whiteList: string[] = ['/login'];
router.beforeEach((to: Route, _: Route, next: any) => {
  const hasToken: string | undefined = UserModule.token;
  debugger;
  console.log(num++, to);
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (!UserModule.role) {
        try {
          UserModule.GetUserInfo();
          const roleMaps: any = {
            admin: [
              'Dashboard',
              'Admin1-1',
              'Admin1-2',
              'Admin2-1',
              'Admin2-2',
              'Admin1-3',
              'Admin3-1',
              'SvgTestPages',
              'SvgTestPages/index',
            ],
            developer: ['Dashboard', 'Developer'],
            editor: ['Dashboard', 'Editor'],
          };
          const accessedRoutesNames: string[] = roleMaps[UserModule.role];
          AuthModule.GenerateRoutes(accessedRoutesNames);
          router.addRoutes(AuthModule.dynamicRoutes);

          console.log(AuthModule.routes, router);
          console.log(to);

          next({ ...to, replace: true });
        } catch (e) {
          UserModule.ResetToken();
          next(`/login?redirect=${to.path}`);
        }
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
