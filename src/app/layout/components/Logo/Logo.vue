<template>
  <div class="logo-wrapper">
    <slot>
      <img class="logo" :src="src" :style="styles" alt="">
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Logo extends Vue {
  @Prop({ default: '' }) private style!: string;
  @Prop({ default: '' }) private src!: string;

  get styles(): string {
    return this.style
  }
}
</script>

<style scoped>
</style>