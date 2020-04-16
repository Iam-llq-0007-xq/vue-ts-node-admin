<template>
  <component :is="type" v-html="path" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path);
const isSvg = (icon: string): boolean => /svg/gi.test(icon);

@Component({
  name: 'IconModule',
})
export default class IconModule extends Vue {
  @Prop({}) private svg!: string;
  @Prop({}) private className!: string;
  @Prop({}) private iconName!: string;
  @Prop({}) private path!: string;

  private get type(): string {
    return 'svg';
  }
}
</script>

<style scoped>

</style>