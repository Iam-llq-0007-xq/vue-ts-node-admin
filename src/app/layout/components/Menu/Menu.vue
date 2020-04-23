<template>
  <el-menu
    :default-active="activeMenu"
    :collapse="isCollapse"
    :unique-opened="false"
    :collapse-transition="false"
    :background-color="layoutVariabes.menuBg"
    :text-color="layoutVariabes.menuText"
    :active-text-color="layoutVariabes.menuActiveText"
    mode="vertical"
  >
    <menu-item v-for="route in permissionRoutes" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Route } from '@/app/interface/router';
import MenuItem from './MenuItem.vue';
import { AuthModule } from '@/app/store/modules/auth';
import { SettingModule } from '@/app/store/modules/setting';
import layoutVariabes from '../../style/layout-variables.scss';

@Component({
  components: {
    MenuItem,
  },
})
export default class Menu extends Vue {
  private activeMenu: string = '';
  private layoutVariabes: any = layoutVariabes;

  private get permissionRoutes(): Route[] {
    return AuthModule.routes;
  }

  private get isCollapse() {
    return SettingModule.isCollapse;
  }

  created() {
    this.activeMenu = this.$route.path;
  }
}
</script>

<style lang="scss" scoped></style>
