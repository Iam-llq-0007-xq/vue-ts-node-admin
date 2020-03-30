<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path);
interface LinkPropsConfig {
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

@Component({})
export default class Link extends Vue {
  @Prop({ required: true })
  private to: string = '';

  get isExternal(): boolean {
    return isExternal(this.to);
  }
  get type(): 'a' | 'router-link' {
    return (this.isExternal && 'a') || 'router-link';
  }

  private linkProps(url: string): LinkPropsConfig {
    return this.isExternal ? { href: url, target: '_blank', rel: 'noopener' } : { to: url };
  }
}
</script>

<style scoped></style>
