import Vue from 'vue';
import App from './app.vue';
import AppRouter from './app.router';
import './auth.guard';
import '@/app/http-interceptors.service';
import './element/element-module';
import './app.module.scss';

Vue.config.productionTip = false;

new Vue({
  router: AppRouter,
  render: (h) => h(App),
}).$mount('#app');
