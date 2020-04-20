import { Route } from 'vue-router';
import { Message } from 'element-ui';
import router, { asyncRouters } from './app.router';
import { Route as RouteConfig } from './interface/router';
import { StoreStateService } from './store.state.service';
import { UserModule } from '@/app/store/modules/user';
import { AuthModule } from '@/app/store/modules/auth';

const whiteList: string[] = ['/login'];
router.beforeEach(async (to: Route, _: Route, next: any) => {
  const hasToken: string | undefined = StoreStateService.getToken();

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (!UserModule.role) {
        UserModule.GetUserInfo({
          ak: StoreStateService.getAk(),
          companyId: StoreStateService.getCompanyId(),
          companyName: StoreStateService.getCompanyName(),
          isRoot: StoreStateService.getIsRoot(),
          nodeId: StoreStateService.getNodeId(),
          nodeName: StoreStateService.getNodeName(),
          productline: StoreStateService.getProductline(),
          productlineName: StoreStateService.getProductlineName(),
          role: StoreStateService.getRole(),
          userId: StoreStateService.getUid(),
          userName: StoreStateService.getUsername(),
        });

        const roleMaps: any = {
          admin: ['Dashboard', 'Admin1-1', 'Admin1-2', 'Admin2-1', 'Admin2-2', 'Admin1-3', 'Admin3-1', 'SvgTestPages', 'SvgTestPages/index'],
          developer: ['Dashboard', 'Developer'],
          editor: ['Dashboard', 'Editor'],
        };
        const accessedRoutesNames: string[] = roleMaps[UserModule.role];
        AuthModule.GenerateRoutes(accessedRoutesNames);
        router.addRoutes(AuthModule.routes);

        console.log(AuthModule.routes, router);
        console.log(to);

        next({ ...to, replace: true });
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
