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
  name: "App",
  components: {
    XFooter,
    XHeader,
    
  }
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
