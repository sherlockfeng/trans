import Vue from 'vue'
import App from './business.vue'
import {Avatar, Input, Select, Option, Icon, Modal, Upload, RadioGroup, Radio, DatePicker} from 'iview';
import 'iview/dist/styles/iview.css';

Vue.component('Avatar', Avatar);
Vue.component('Input', Input);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Icon', Icon);
Vue.component('Modal', Modal);
Vue.component('Upload', Upload);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);
Vue.component('DatePicker', DatePicker);

Vue.config.productionTip =false

new Vue({
  render: h => h(App),
}).$mount('#app')
