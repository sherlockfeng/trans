import Vue from 'vue'
import App from './index.vue'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式

Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
