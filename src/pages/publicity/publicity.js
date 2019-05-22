import Vue from 'vue'
import App from './publicity.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(iView);
Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
