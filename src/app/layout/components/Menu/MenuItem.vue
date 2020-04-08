<template>
  <div v-if="!item.meta || !item.meta.hidden">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <app-link
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(theOnlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': isFirstLevel }"
        >
          <span
            v-if="theOnlyOneChild.meta.title"
            slot="title"
          >
            {{ theOnlyOneChild.meta.title }}
          </span>
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
        <span
          v-if="item.meta && item.meta.title"
          slot="title"
        >
          {{ item.meta.title }}
        </span>
      </template>
      <menu-item
        v-for="child in item.children"
        :key="child.path"
        :is-first-level="false"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Route, ChildRoute } from '@/app/interface/router';
import Path from 'path';
import { MenuItem as ElMenuItem, Submenu as ElSubmenu } from 'element-ui';
import Link from './Link.vue';
import Item from './Item.vue';

Vue.use(ElMenuItem);
Vue.use(ElSubmenu);

const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path);

@Component({
  name: 'MenuItem',
  components: {
    AppLink: Link,
    Item,
  },
})
export default class MenuItem extends Vue {
  @Prop({ required: true }) private item!: Route;
  @Prop({ default: '' }) private basePath!: string;
  @Prop({ default: true }) private isFirstLevel!: boolean;

  get alwaysShowRootMenu(): boolean {
    return this.item.meta && this.item.meta.alwaysShow ? true : false;
  }

  get showingChildNumer(): number {
    if (this.item.children) {
      const showingChild = this.item.children.filter((child) => (child.meta && child.meta.hidden ? false : true));
      return showingChild.length;
    }
    return 0;
  }

  get theOnlyOneChild(): Route | ChildRoute | null {
    if (this.showingChildNumer > 1) {
      return null;
    }
    if (this.item.children) {
      for (const child of this.item.children) {
        if (!child.meta || !child.meta.hidden) {
          return child;
        }
      }
    }
    return { ...this.item, path: '' };
  }

  private resolvePath(routePath: string): string {
    if (isExternal(routePath)) {
      return routePath;
    }
    if (isExternal(this.basePath)) {
      return this.basePath;
    }
    return Path.resolve(this.basePath, routePath);
  }
}
</script>

<style lang="scss" scoped></style>
