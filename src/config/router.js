//引入Vue
import Vue from "vue";
// 引入Vue-router
import VueRouter from "vue-router";
// 实例化
Vue.use(VueRouter);

import App from "../App.vue";

// 设置路由，配置
let router = new VueRputer({
  router: [{ path: "/app", component: App, name: "app", children: [
      {path:'',component:'',name:''}
  ] }]
});


// 路由守卫
router.veforeEach((to,from,next)=>{
    console.log(to);
});

// 抛出路由
export default router