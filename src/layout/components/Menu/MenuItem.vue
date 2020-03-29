<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link
        v-if="onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <item
            :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Route } from "@/types";
import { MenuItem as ElMenuItem } from 'element-ui'
import Link from './Link.vue'

const isExternal = (path: string): boolean =>
  /^(https?:|mailto:|tel:)/.test(path);

@Component({
  components: {
    ElMenuItem,
    AppLink: Link
  }
})

export default class MenuItem extends Vue {
  @Prop({ required: true }) readonly item: Route = {
    hidden: false,
    alwaysShow: true,
    redirect: 'noRedirect',
    name: '',
    meta: { title: '', activeMenu: '' },
    children: []
  };
}
</script>

<style lang="scss" scoped>
</style>