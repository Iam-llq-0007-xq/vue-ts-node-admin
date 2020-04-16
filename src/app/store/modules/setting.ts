import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/app/store';

interface SettingState {
  isCollapse: boolean;
}

@Module({ dynamic: true, store, name: 'setting' })
class Setting extends VuexModule implements SettingState {
  public isCollapse = false;

  @Action
  public SetIsCollapse(isCollapse: boolean) {
    this.SET_IS_COLLAPSE(isCollapse);
  }

  @Mutation
  private SET_IS_COLLAPSE(isCollapse: boolean) {
    this.isCollapse = isCollapse;
  }
}

export const SettingModule = getModule(Setting);
