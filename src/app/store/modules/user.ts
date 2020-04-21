import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import { StoreStateService } from '@/app/store.state.service';
import store from '@/app/store';

export interface UserState {
  token: string;
  ak: string;
  companyId: string;
  companyName: string;
  isRoot: boolean;
  nodeId: string;
  nodeName: string;
  productline: number[];
  productlineName: string[];
  role: string;
  email: string;
  userName: string;
  userId: string;
}

const parse = <T>(str: string | undefined): T => str !== undefined ? JSON.parse(str) : str;

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserState {
  public token = StoreStateService.getToken() || '';
  public ak = '';
  public companyId = '';
  public companyName = '';
  public isRoot = false;
  public nodeId = '';
  public nodeName = '';
  public productline: number[] = [];
  public productlineName: string[] = [];
  public role = '';
  public email = '';
  public userName = '';
  public userId = '';

  @Action
  public SetToken() {
    const token: string = StoreStateService.getToken() || '';
    this.SET_TOKEN(token);
  }

  @Action
  public ResetToken() {
    StoreStateService.removeToken();
  }

  @Action
  public GetUserInfo() {
    const isRoot: boolean = parse(StoreStateService.getIsRoot());
    const productline: number[] = parse(StoreStateService.getProductline());
    const productlineName: string[] = parse(StoreStateService.getProductlineName());
    const ak: string = StoreStateService.getAk() || '';
    const companyId: string = StoreStateService.getCompanyId() || '';
    const companyName: string = StoreStateService.getCompanyName() || '';
    const nodeId: string = StoreStateService.getNodeId() || '';
    const nodeName: string = StoreStateService.getNodeName() || '';
    const role: string = StoreStateService.getRole() || '';
    const userId: string = StoreStateService.getUid() || '';
    const userName: string = StoreStateService.getUsername() || '';
    const email: string = StoreStateService.getEmail() || '';
    this.SET_AK(ak);
    this.SET_COMPANYID(companyId);
    this.SET_COMPANYNAME(companyName);
    this.SET_ISROOT(isRoot);
    this.SET_NODEID(nodeId);
    this.SET_NODENAME(nodeName);
    this.SET_PRODUCTLINE(productline);
    this.SET_PRODUCTLINENAME(productlineName);
    this.SET_ROLE(role);
    this.SET_USERID(userId);
    this.SET_USERNAME(userName);
    this.SET_EMAIL(email);
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
  private SET_ISROOT(isRoot: boolean) {
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
  private SET_PRODUCTLINE(productline: number[]) {
    this.productline = productline;
  }
  @Mutation
  private SET_PRODUCTLINENAME(productlineName: string[]) {
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
