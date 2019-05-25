import Vue from 'vue'
import App from './workBench.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';

import loadMap from 'highcharts/modules/map.js';
loadMap(Highcharts);

Vue.use(iView);
Vue.use(VueHighcharts, { Highcharts });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
