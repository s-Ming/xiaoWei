<template>
  <!-- <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft"> -->
    <div class="top">
      <i
        class="fa fa-chevron-left"
        aria-hidden="true"
        @touchstart="touchstart($event)"
        @touchend="touchend($event)"
        @click="returnPage"
      ></i>
      <span>小明</span>
      <i
        class="fa fa-ellipsis-h"
        aria-hidden="true"
        @touchstart="touchstart($event)"
        @touchend="touchend($event)"
      ></i>
    </div>
  <!-- </transition> -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //给事件源对象添加类名来设置点击高亮效果
    touchstart(e) {
      e.target.classList.add("gaoliang");
    },
    touchend(e) {
      e.target.classList.remove("gaoliang");
    },
    returnPage() {
      // 返回上一页
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../styls/main.less";
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .h(40);
  .padding(0, 10, 0, 10);
  i {
    width: 10%;
    text-align: center;
    .fs(16);
    .h(35);
    .lh(35);
  }
  span {
    width: 80%;
    text-align: left;
    .fs(16);
    .padding(0, 0, 0, 5);
  }
}
.gaoliang {
  background: #ccc;
}
</style>

