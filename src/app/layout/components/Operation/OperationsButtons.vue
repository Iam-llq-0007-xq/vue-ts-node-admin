<template>
  <el-row :gutter="24">
    <el-col v-for="operator in operators" :key="operator.name" :span="operator.col.span" :style="operator.col.styles">
      <el-button :type="operator.type" :style="operator.button.styles" @click="operator.handleClick(operator)">
        {{ operator.name }}
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface Operator {
  name: string;
  type?: string;
  icon?: string;
  isOnlyIcon?: boolean;
  handleClick?: () => {};
  col?: {
    span?: number;
    styles?: object;
  };
  button?: {
    styles?: object;
  };
}

@Component({
  name: 'OperationsButtons',
})
export default class OperationsButtons extends Vue {
  @Prop({ default: () => [] }) private operationInfos!: Operator[];

  private operators: Operator[] = [];

  created() {
    this.operators.length = 0;
    this.operators.push(...this.initOperators(this.operationInfos));
  }

  initOperators(operationInfos: Operator[]) {
    const operators = operationInfos.reduce((operatorList: Operator[], operatorInfo: Operator) => {
      operatorList.push({
        name: '',
        type: 'default',
        icon: '',
        isOnlyIcon: false,
        col: {},
        button: {},
        ...operatorInfo,
      });
      return operatorList;
    }, []);
    return operators;
  }
}
</script>

<style scoped>
.el-row {
  height: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.el-col {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.el-button {
  width: 100%;
  margin-left: 0;
}
</style>
