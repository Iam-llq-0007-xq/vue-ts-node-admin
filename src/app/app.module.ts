import Vue from 'vue';
import App from './app.vue';
import AppRouter from './app.router';
import './element/main';
import './icons/main';
import './app.module.scss';
import './http-interceptors.service';
import './auth.guard';

Vue.config.productionTip = false;

new Vue({
  router: AppRouter,
  render: (h) => h(App),
}).$mount('#app');
