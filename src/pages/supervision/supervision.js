import Vue from 'vue'
import App from './supervision.vue'
import {Button, Input, Select, Option, Table, Page} from 'iview';
import 'iview/dist/styles/iview.css';

// Vue.use(iView);
Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Table', Table)
Vue.component('Page', Page)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
