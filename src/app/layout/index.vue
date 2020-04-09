<template>
  <el-container style="height: 100%;">
    <el-aside style="width: 200px;">
      <logo style="height: 100px;" />
      <el-scrollbar style="height: calc(100% - 100px);">
        <sidebar />
      </el-scrollbar>
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
import { Menu as Sidebar, Logo } from './components';

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

<style scoped>
/* .el-aside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
} */
</style>
