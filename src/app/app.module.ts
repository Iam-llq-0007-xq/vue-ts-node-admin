import Vue from 'vue';
import './element-module';
import App from './app.vue';
import AppRouter from './app.router';
import './auth.guard';
import '@/app/http-interceptors.service';

Vue.config.productionTip = false;

new Vue({
  router: AppRouter,
  render: (h) => h(App),
}).$mount('#app');
