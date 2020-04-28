<template>
  <div>
    <upload />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Upload from './components/Upload.vue';

@Component({
  components: {
    Upload,
  }
})
export default class Dashboard extends Vue {
  
}
</script>

<style scoped></style>
