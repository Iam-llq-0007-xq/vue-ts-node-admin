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
    userName: 'admin',
    pwd: 'aaa',
  };
  private errorMsg: string = '';

  submit() {
    const userInfo = {
      user_name: this.form.userName,
      pwd: this.form.pwd,
    };
    this.http.login(userInfo).subscribe(
      (res: any) => {
        this.setUserInfo(res);
      },
      (error) => { },
      () => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          this.$router.push('/');
        }, 100);
      },
    );
  }

  setUserInfo(data: any) {
    this.storeState.setToken(data.role + '_token');
    UserModule.SetToken();
    this.storeState.setRole('admin');
    this.storeState.setUsername('xiaoqge');
  }
}
</script>

<style scoped></style>
