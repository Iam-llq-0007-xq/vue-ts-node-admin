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
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Route } from '@/types'
const ElMenuItem = require('element-ui').MenuItem

const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path)

@Component({
  name: 'link',
  template: `<component :is="type" v-bind="linkProps(to)"><slot /></component>`,
  props: {
    to: {
      required: true,
      type: String,
      default: ''
    }
  },
  computed: {
    isExternal(): boolean {
      return isExternal(this.to)
    },
     type(): 'a' | 'router-link' {
        return (this.isExternal && 'a') || 'router-link'
      }
  },
  methods:  {
    // https://github.com/PanJiaChen/vue-admin-template/issues/274
  linkProps(url: string): LinkPropsInterface {
    return (
      (this.isExternal && {
        href: url,
        target: '_blank',
        rel: 'noopener'
      }) || {
        to: url
      }
    )
  }
  }
})
@Component({
  components: {
    ElMenuItem
  }
})
export default class MenuItemModule extends Vue {
  @Prop({ required: true, default: () => ({}) }) readonly item: Route; 
}

interface LinkPropsInterface {
  to?: string
  href?: string
  target?: string
  rel?: string
}
</script>

<style lang="scss" scoped>
</style>