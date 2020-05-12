import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/app/store';
import { StoreStateService } from '@/app/store.state.service';
import { Observable } from 'rxjs';

export type Role = 'admin' | 'vistor' | string;

export interface UserState {
  role: Role;
  userName: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserState {
  public role = '';
  public userName = '';
  public token = '';

  @Action
  public SetToken() {
    const token = StoreStateService.getToken() || '';
    this.SET_TOKEN(token);
  }

  @Action
  public ResetToken() {
    this.SET_TOKEN('');
    StoreStateService.removeToken();
  }

  @Action
  public Logout() {
    this.ResetToken();
  }

  @Action
  public GetUserInfo() {
    const userName = StoreStateService.getUsername() || '';
    const role = StoreStateService.getRole() || '';
    const data: UserState = {
      userName,
      role,
    };
    return new Promise((resolve, reject) => {
      if (userName && role) {
        this.SET_USERNAME(userName);
        this.SET_ROLE(role);
        resolve(data);
      } else {
        reject(data);
      }
    });
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Mutation
  private SET_ROLE(role: Role) {
    this.role = role;
  }

  @Mutation
  private SET_USERNAME(userName: string) {
    this.userName = userName;
  }
}

export const UserModule = getModule(User);
