<template>
  <div>
    login耶
    <div>
      <el-button type="primary" @click="submit">
        login
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Button as ElButton } from 'element-ui';

Vue.use(ElButton);

@Component({})
export default class Login extends Vue {
  form: { userName: string; pwd: string } = { userName: 'xq', pwd: 'asdf' };
  submit() {
    
  };
}
</script>

<style scoped></style>
