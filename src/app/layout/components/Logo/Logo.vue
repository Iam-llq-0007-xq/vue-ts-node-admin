<template>
  <div class="logo-wrapper">
    <slot>
      <img class="logo" :src="src" :styles="styles" alt="" />
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

export default class Logo extends Vue {
  @Prop({ default: '' }) private styles!: string;
  @Prop({ default: '' }) private src!: string;
}
</script>

<style scoped>
.logo-wrapper {
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
}
.logo {
  height: 100%;
}
</style>
