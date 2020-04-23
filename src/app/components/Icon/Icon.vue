<template>
  <i :class="iconWrapClass">
    <component :is="type" :class="iconName" :name="name" />
  </i>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgIcon from 'vue-svgicon';

const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path);
const isSvg = (icon: string): boolean => /^svg/gi.test(icon);

@Component({
  name: 'IconModule',
  components: {
    SvgIcon,
  },
})
export default class IconModule extends Vue {
  @Prop({}) private iconName!: string;

  private get isSvgIconName(): boolean {
    return isSvg(this.iconName);
  }

  private get type(): string {
    // svg-[svgName] or iconfont or xxx el-icon-
    return this.isSvgIconName ? 'svg-icon' : 'i';
  }
  private get name(): string {
    return this.isSvgIconName ? this.iconName.replace(/^svg\-/, '') : this.iconName;
  }
  private get iconClass(): string {
    return this.isSvgIconName ? `el-icon-${this.iconName}` : this.iconName;
  }
  private get iconWrapClass(): string {
    return this.isSvgIconName ? `svg-wrap` : '';
  }
}
</script>

<style></style>
