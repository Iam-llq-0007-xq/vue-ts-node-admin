<template>
  <el-container>
    <el-aside>
      <logo />
      <menu></menu>
    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuModule from './Menu.module.vue'

@Component({
  components: {
    Menu: MenuModule
  }
})
@Component({
  name: 'logo',
  template: `
  <div class="logo" style="background: url('@/assets/logo.png') no-repeat;"></div>
  `,
})
export default class LayoutComponent extends Vue {
}
</script>

<style scoped>
</style>
