<template>
  <el-scrollbar>
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
  </el-scrollbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Route } from "@/types";
import { Menu as ElMenu } from "element-ui";
import MenuItem from "./MenuItem.vue";

@Component({
  components: {
    MenuItem,
    ElMenu
  }
})
export default class Menu extends Vue {
  activeMenu: string = "";
  isCollapse: boolean = false;

  get permissionRoutes(): Route[] {
    return [];
  }
}
</script>

<style lang="scss" scoped>
</style>