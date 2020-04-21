<template>
  <div>
    <h1>Login</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="userName">
        <el-input v-model="form.userName" />
      </el-form-item>
      <el-form-item label="pwd">
        <el-input v-model="form.pwd" />
      </el-form-item>
      <el-button type="primary" @click="submit">
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
  private form: {
    userName: string;
    pwd: string;
  } = {
    userName: 'SKtest',
    pwd: 'SKtest123',
  };

  submit() {
    const userInfo = {
      user_name: this.form.userName,
      pwd: this.form.pwd,
      scene: 'login',
    };
    this.http.login(userInfo).subscribe(
      (res) => {
        console.log('login res ...', res);
        this.getUserInfo(res);
      },
      (error) => {},
      () => {
        this.$router.push('/');
      },
    );
  }

  getUserInfo(data: any) {
    this.storeState.setToken(data.token);
    UserModule.SetToken();
    this.storeState.setAk(data.ak);
    this.storeState.setCompanyId(data.company_id);
    this.storeState.setCompanyName(data.company_name);
    const isRoot: string = this.isRootFromTypeAndNodeId(data.type, data.node_id);
    this.storeState.setIsRoot(isRoot);
    this.storeState.setNodeId(data.node_id);
    this.storeState.setNodeName(data.node_name);
    this.storeState.setProductline(this.toString(data.productline));
    this.storeState.setProductlineName(this.toString(data.productline_name));
    const role = this.getRoleFromRoleOrType(data.type, data.role);
    this.storeState.setRole(role);
    this.storeState.setEmail(data.email);
    this.storeState.setUid(data.user_id);
    this.storeState.setUsername(data.name);
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
