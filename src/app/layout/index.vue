<template>
  <el-container style="height: 100%;" :class="{ 'is-collapse': isCollapse }">
    <el-aside :style="`width: ${sideBarWidth};`">
      <collapse-button :style="`height: 5px; background-color: #888;`" />
      <logo :src="require('@/assets/logo.png')" :style="`height: ${logoHeight}`" />
      <el-scrollbar :style="`height: calc(100% - ${logoHeight} - 180px - 10px);`">
        <sidebar />
      </el-scrollbar>
      <operation :style="`height: 180px; width: ${sideBarWidth};`" />
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
import { Menu as Sidebar, Logo, Operation, CollapseButton } from './components';
import layoutVariables from './style/layout-variables.scss';
import { SettingModule } from '@/app/store/modules/setting';

@Component({
  components: {
    Sidebar,
    Logo,
    Operation,
    CollapseButton,
  },
})
export default class LayoutComponent extends Vue {
  private layoutVariables: any = layoutVariables;
  private logoHeight: string = layoutVariables.logoHeight;

  private get sideBarWidth(): string {
    return this.isCollapse ? 'min-content' : layoutVariables.sideBarWidth;
  }

  private get isCollapse(): boolean {
    return SettingModule.isCollapse;
  }

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

  /deep/ .router-link-active > .el-menu-item {
    background-color: $menuActiveBg !important;
  }
}

/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}

.is-collapse {
  /deep/ .operation {
    width: min-content;
  }
}
</style>
