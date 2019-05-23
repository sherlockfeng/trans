import Vue from 'vue'
import App from './login.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
