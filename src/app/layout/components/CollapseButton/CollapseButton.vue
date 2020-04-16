<template>
  <div class="collapseButton" @click="handleToggle"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { SettingModule } from '@/app/store/modules/setting';

@Component({
  name: 'CollapseButton',
})
export default class CollapseButton extends Vue {
  get isActive(): boolean {
    return SettingModule.isCollapse;
  }

  handleToggle() {
    SettingModule.SetIsCollapse(!SettingModule.isCollapse);
  }
}
</script>

<style scoped>
.collapseButton {
  cursor: pointer;
}

.hamburger {
  display: inline-block;
  vertical-align: middle;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
