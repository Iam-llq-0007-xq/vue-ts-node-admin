<template>
  <el-container>
    <el-aside>
      <logo />
      <sidebar></sidebar>
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
import { Menu as Sidebar, Logo } from './components';

Vue.use(ElAside);
Vue.use(ElContainer);
Vue.use(ElMain);

@Component({
  components: {
    Sidebar,
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
