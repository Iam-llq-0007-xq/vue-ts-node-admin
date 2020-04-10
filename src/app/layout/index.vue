<template>
  <el-container style="height: 100%;">
    <el-aside :style="`width: ${sideBarWidth};`">
      <logo :src="require('@/assets/logo.png')" :style="`height: ${logoHeight}`" />
      <el-scrollbar :style="`height: calc(100% - ${logoHeight});`">
        <sidebar />
      </el-scrollbar>
      <operation />
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
import { Menu as Sidebar, Logo, Operation } from './components';
import layoutVariables from './style/layout-variables.scss';

@Component({
  components: {
    Sidebar,
    Logo,
    Operation,
  },
})
export default class LayoutComponent extends Vue {
  private layoutVariables: any = layoutVariables;
  private sideBarWidth: string = layoutVariables.sideBarWidth;
  private logoHeight: string = layoutVariables.logoHeight;

  private get activePath(): string {
    return this.$route.path;
  }
}
</script>

<style lang="scss" scoped>
@import './style/layout-variables.scss';
aside {
  background: $menuBg;
  font-size: $menuFontSize;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: $menuText;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="scss" scoped>
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
