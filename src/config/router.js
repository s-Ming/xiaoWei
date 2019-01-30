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
import Message from "../components/page/message/Message.vue"

// 设置路由，配置
const router = new VueRouter({
  routes: [  //该单词不能写错
      {path:'/',redirect: '/app/home' },
    {
      path: "/app",
      component: App,
      name: "app",
      children: [
        { path: "home", component: Home, name: "home" },//微信
        { path: "contacts", component: Contacts, name: "contacts" },//通讯录
        { path: "find", component: Find, name: "find" },//发现
        { path: "my", component: My, name: "my" }//我
      ]
    },
    {path:'/message',component:Message,name:'message'},//聊天信息页

  ]
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to);
  next();
});

// 抛出路由
export default router;
