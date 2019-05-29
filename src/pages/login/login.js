import Vue from 'vue'
import App from './login.vue'
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import VueAxios from 'vue-axios'
import {Input} from 'iview';


Vue.use(VueAxios,axios);
Vue.component('Input', Input);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
