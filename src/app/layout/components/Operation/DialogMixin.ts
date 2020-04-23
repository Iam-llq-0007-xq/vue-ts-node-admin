import { Vue, Component } from 'vue-property-decorator';

@Component({})
export class DialogMixinModule extends Vue {
  private dialog: {
    dialogVisible: boolean;
  } = {
    dialogVisible: false,
  };

  openDialog(option: object = {}) {
    this.dialog = {
      ...this.dialog,
      dialogVisible: true,
      ...option,
    };
  }
}
