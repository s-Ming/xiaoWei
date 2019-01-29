//引入Vue
import Vue from "vue";
// 引入Vue-router
import VueRouter from "vue-router";
// 实例化
Vue.use(VueRouter);

import App from "../App.vue";

import Home from "../components/page/home/Home.vue";
import Contacts from "../components/page/contacts/Contacts.vue";
import Find from "../components/page/find/Find.vue";
import My from "../components/page/my/My.vue";



// 设置路由，配置
let router = new VueRouter({
  router: [{ path: "/app", component: App, name: "app", children: [
      {path:'home',component:Home,name:'home'},
      {path:'contacts',component:Contacts,name:'contacts'},
      {path:'find',component:Find,name:'find'},
      {path:'my',component:My,name:'my'}
  ] }]
});


// 路由守卫
router.beforeEach((to,from,next)=>{
    console.log(to);
    next();
});

// 抛出路由
export default router;