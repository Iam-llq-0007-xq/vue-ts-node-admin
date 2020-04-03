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
import { Button as ElButton, Form as ElForm, FormItem as ElFormItem, Input as ElInput } from 'element-ui';
import { ApiService } from '@/app/app.service';
import { StoreStateService } from '@/app/store.state.service'

Vue.use(ElButton);
Vue.use(ElForm);
Vue.use(ElFormItem);
Vue.use(ElInput);

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

    this.$router.push('/');
  }
}
</script>

<style scoped></style>
