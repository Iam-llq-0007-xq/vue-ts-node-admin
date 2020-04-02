<template>
  <el-container>
    <el-aside>
      <logo />
      <menu></menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view :key="activePath" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Aside as ElAside, Container as ElContainer, Main as ElMain } from 'element-ui';
import { Menu, Logo } from './components';

Vue.use(ElAside);
Vue.use(ElContainer);
Vue.use(ElMain);

@Component({
  components: {
    Menu,
    Logo,
  },
})
export default class LayoutComponent extends Vue {
  get activePath(): string {
    return this.$route.path;
  }
}
</script>

<style scoped></style>
