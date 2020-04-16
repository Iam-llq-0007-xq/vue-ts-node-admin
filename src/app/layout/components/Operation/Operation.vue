<template>
  <div class="operation">
    <operations-buttons :operation-infos="operationInfos" />
    <el-dialog :title="dialog.title" :visible.sync="dialog.dialogVisible">
      <div>
        <!-- coding... -->
      </div>
      <div slot="footer">
        <el-button @click="dialog.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialog.dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Mixins } from 'vue-property-decorator';
import OperationsButtons from './OperationsButtons.vue';
import { DialogMixinModule } from './DialogMixin';

@Component({
  name: 'Operation',
  components: {
    OperationsButtons,
  },
})
export default class Opration extends Mixins(DialogMixinModule) {
  operationInfos = [
    {
      name: '用户信息',
      type: 'text',
      col: {
        styles: {
          height: '33%',
        },
      },
      button: {
        styles: {
          height: '100%',
        },
      },
      handleClick: () =>
        this.openDialog({
          title: '用户信息',
          component: 'UserInfoModule',
        }),
    },
    {
      name: '修改密码',
      type: 'text',
      col: {
        styles: {
          height: '33%',
        },
      },
      button: {
        styles: {
          height: '100%',
        },
      },
      handleClick: () =>
        this.openDialog({
          title: '修改密码',
          component: 'RewritePassword',
        }),
    },
    {
      name: '退出登陆',
      type: 'text',
      col: {
        styles: {
          height: '33%',
        },
      },
      button: {
        styles: {
          height: '100%',
        },
      },
      handleClick: () => console.log('退出登陆 ...'),
    },
  ];
}
</script>

<style lang="scss" scoped>
@import '../../style/layout-variables.scss';

/deep/ .el-button--text {
  color: $menuText;

  &:hover,
  &:focus {
    color: $menuActiveText;
    background-color: $menuHoverBg;
  }
}
</style>
