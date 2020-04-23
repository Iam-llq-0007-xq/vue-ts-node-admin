declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module '*.scss' {
  const ScssExport: { [className: string]: string };
  export default ScssExport;
}