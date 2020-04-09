<template>
  <el-menu
    :default-active="activeMenu"
    :collapse="isCollapse"
    :unique-opened="false"
    :collapse-transition="false"
    mode="vertical"
  >
    <menu-item
      v-for="route in permissionRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Route } from '@/app/interface/router';
import MenuItem from './MenuItem.vue';
import { AuthModule } from '@/app/store/modules/auth';

@Component({
  components: {
    MenuItem,
  },
})
export default class Menu extends Vue {
  activeMenu: string = '';
  isCollapse: boolean = false;

  get permissionRoutes(): Route[] {
    return AuthModule.routes;
  }
}
</script>

<style lang="scss" scoped></style>
