import Vue from 'vue';
import App from './app.vue';
import AppRouter from './app.router';
import './auth.guard';
import 'normalize.css';
// import 'element-ui/lib/theme-chalk/index.css';
import './theme.scss';
// import { Button, Table } from 'element-ui';
// Vue.use(Button);
// Vue.use(Table);
// import { Button } from 'element-ui';

// Vue.component(Button.name, Button);

Vue.config.productionTip = false;

new Vue({
  router: AppRouter,
  render: (h) => h(App),
}).$mount('#app');
