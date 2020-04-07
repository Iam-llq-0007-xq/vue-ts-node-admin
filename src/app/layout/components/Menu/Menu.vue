<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Route } from '@/app/interface/router';
import { Menu as ElMenu } from 'element-ui';
import MenuItem from './MenuItem.vue';
import { AuthModule } from '@/app/store/modules/auth';

Vue.use(ElMenu);

@Component({
  components: {
    MenuItem,
  },
})
export default class Menu extends Vue {
  activeMenu: string = '';
  isCollapse: boolean = false;

  get permissionRoutes(): Route[] {
    return AuthModule.dynamicRoutes;
  }
}
</script>

<style lang="scss" scoped></style>
