<template>
  <div>
    <h1>Login</h1>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="userName">
        <el-input v-model="form.userName" />
      </el-form-item>
      <el-form-item label="pwd">
        <el-input v-model="form.pwd" />
      </el-form-item>
      <el-button
        type="primary"
        @click="submit"
      >
        login
      </el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ApiService } from '@/app/api.service';
import { StoreStateService } from '@/app/store.state.service';
import { UserModule } from '@/app/store/modules/user';

@Component({})
export default class Login extends Vue {
  private http = new ApiService();
  private storeState = new StoreStateService();
  form: {
    userName: string;
    pwd: string;
  } = {
    userName: 'SKtest',
    pwd: 'SKtest123',
  };

  async submit() {
    const userInfo = { user_name: this.form.userName, pwd: this.form.pwd, scene: 'login' };
    const res = await this.http.login(userInfo);
    console.log('login success...', res);

    this.storeState.setToken(res.token);
    UserModule.GetToken(res.token);
    this.storeState.setAk(res.ak);
    this.storeState.setCompanyId(res.company_id);
    this.storeState.setCompanyName(res.company_name);
    const isRoot: string = this.isRootFromTypeAndNodeId(res.type, res.node_id);
    this.storeState.setIsRoot(isRoot);
    this.storeState.setNodeId(res.node_id);
    this.storeState.setNodeName(res.node_name);
    this.storeState.setProductline(this.toString(res.productline));
    this.storeState.setProductlineName(this.toString(res.productline_name));
    const role = this.getRoleFromRoleOrType(res.type, res.role);
    this.storeState.setRole(role);
    // email
    this.storeState.setUid(res.user_id);
    this.storeState.setUsername(res.name);

    this.$router.push('/');
  }

  isRootFromTypeAndNodeId(type: string, nodeId: string): string {
    const isRoot: boolean = type === 'admin' && nodeId === '000';
    return isRoot + '';
  }
  getRoleFromRoleOrType(type: string, role: number): string {
    switch (role) {
      case 2:
        return 'operation';
      default:
        return type;
    }
  }
  toString(param: any) {
    return JSON.stringify(param);
  }
}
</script>

<style scoped></style>
