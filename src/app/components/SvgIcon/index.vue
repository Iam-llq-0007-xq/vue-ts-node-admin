<template>
  <svg version="1.1" :class="className" v-html="path" :style="style"></svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const prefixClass = 'svg';

@Component({
  name: 'SvgIcon',
})
export default class SvgIcon extends Vue {
  @Prop({ default: '' }) private path!: string;
  @Prop({ default: () => ({}) }) private style!: object;
  @Prop({ default: '' }) private suffixClass!: string;

  private get className(): string {
    return '';
  }
}
</script>

<style scoped></style>
