<template>
  <div id="app">
    <XHeader></XHeader>
    <router-view></router-view>
    <XFooter></XFooter>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import XFooter from "./components/common/Footer.vue";
import XHeader from "./components/common/Header.vue";

export default {
  name: "app",
  components: {
    XFooter,
    XHeader
  }
};
</script>

<style>
/* 引入全局字体图标 */

#app {
}
</style>
