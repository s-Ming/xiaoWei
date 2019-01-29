import Vue from 'vue';
import App from './App.vue';

// 引入全局配置样式reset.less  
import './styls/reset.less';
// 引入字体图标
import '../static/css/font-awesome.css';

// 引入路由，挂载到实例new Vue中加上router，则子类组件都可以继承通过this.$route进行使用
import router from './config/router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
