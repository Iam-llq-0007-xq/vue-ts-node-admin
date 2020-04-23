import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import './components';
import './style/icon.scss';

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
  classPrefix: 'svg',
});
