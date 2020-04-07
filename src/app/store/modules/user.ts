import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import { StoreStateService } from '@/app/store.state.service';
import store from '@/app/store';

export interface UserState {
  token: string;
  ak: string;
  companyId: string;
  companyName: string;
  isRoot: boolean | string;
  nodeId: string;
  nodeName: string;
  productline: number[] | string;
  productlineName: string[] | string;
  role: string;
  email: string;
  userName: string;
  userId: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserState {
  public token = StoreStateService.getToken() || '';
  public ak = StoreStateService.getAk() || '';
  public companyId = StoreStateService.getCompanyId() || '';
  public companyName = StoreStateService.getCompanyName() || '';
  public isRoot = StoreStateService.getIsRoot() || '';
  public nodeId = StoreStateService.getNodeId() || '';
  public nodeName = StoreStateService.getNodeName() || '';
  public productline = StoreStateService.getProductline() || [];
  public productlineName = StoreStateService.getProductlineName() || [];
  public role = '';
  public email = StoreStateService.getEmail() || '';
  public userName = StoreStateService.getUsername() || '';
  public userId = StoreStateService.getUid() || '';

  private StoreState = new StoreStateService();

  @Action
  public GetToken(token: string) {
    this.SET_TOKEN(token);
  }

  @Action
  public GetUserInfo(data: any) {
    this.SET_AK(data.ak);
    this.SET_COMPANYID(data.companyId);
    this.SET_COMPANYNAME(data.companyName);
    this.SET_ISROOT(data.isRoot);
    this.SET_NODEID(data.nodeId);
    this.SET_NODENAME(data.nodeName);
    this.SET_PRODUCTLINE(data.productline);
    this.SET_PRODUCTLINENAME(data.productlineName);
    this.SET_ROLE(data.role);
    this.SET_USERID(data.userId);
    this.SET_USERNAME(data.userName);
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }
  @Mutation
  private SET_AK(ak: string) {
    this.ak = ak;
  }
  @Mutation
  private SET_COMPANYID(companyId: string) {
    this.companyId = companyId;
  }
  @Mutation
  private SET_COMPANYNAME(companyName: string) {
    this.companyName = companyName;
  }
  @Mutation
  private SET_ISROOT(isRoot: string) {
    this.isRoot = isRoot;
  }
  @Mutation
  private SET_NODEID(nodeId: string) {
    this.nodeId = nodeId;
  }
  @Mutation
  private SET_NODENAME(nodeName: string) {
    this.nodeName = nodeName;
  }
  @Mutation
  private SET_PRODUCTLINE(productline: string) {
    this.productline = productline;
  }
  @Mutation
  private SET_PRODUCTLINENAME(productlineName: string) {
    this.productlineName = productlineName;
  }
  @Mutation
  private SET_ROLE(role: string) {
    this.role = role;
  }
  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email;
  }
  @Mutation
  private SET_USERNAME(userName: string) {
    this.userName = userName;
  }
  @Mutation
  private SET_USERID(userId: string) {
    this.userId = userId;
  }
}

export const UserModule = getModule(User);
