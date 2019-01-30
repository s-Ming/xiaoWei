<template>
  <div class="header">
    <div class="header_one" v-show="show1">
      <span v-text="titles"></span>
      <i
        class="fa fa-search"
        aria-hidden="true"
        @click="search"
        @touchstart="touchstart($event)"
        @touchend="touchend($event)"
      ></i>
      <div>
        <i
          class="fa fa-plus-circle"
          aria-hidden="true"
          @click="add"
          @touchstart="touchstart($event)"
          @touchend="touchend($event)"
        ></i>
        <ul class="tanchuan" v-show="tanchuan">
          <li>
            <i class="fa fa-comment-o" aria-hidden="true"></i>
            <span>发起群聊</span>
          </li>
          <li>
            <i class="fa fa-user-plus" aria-hidden="true"></i>
            <span>添加朋友</span>
          </li>
          <li>
            <i class="fa fa-chrome" aria-hidden="true"></i>
            <span>扫一扫</span>
          </li>
          <li>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            <span>收付款</span>
          </li>
          <li>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <span>帮助与反馈</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="header_two" v-show="show2">
      <i class="fa fa-camera" aria-hidden="true"></i>
    </div>
  </div>
</template>


<script type="text/javascript">
export default {
  data() {
    return {
      titles: "微信",
      className: "",
      show1: true,
      show2: false,
      tanchuan: false,
    };
  },
  //   props: ["title"],
  methods: {
    //跳转到搜索页面
    search() {
      console.log(6666);
      // this.$route.push('/search');
    },
    add() {
      this.tanchuan = !this.tanchuan;
    },

    //给事件源对象添加类名来设置点击高亮效果
    touchstart(e) {
      // console.log(e.target);
      e.target.classList.add("gaoliang");
    },
    touchend(e) {
      e.target.classList.remove("gaoliang");
    }
  },
  created() {
    // console.log(this.$props.title);
  },
  watch: {
    $route() {
      console.log(this.$route.path);
      //根据路由设置title信息
      let path = this.$route.path;
      switch (path) {
        case "/app/home":
          this.titles = "微信";
          break;
        case "/app/contacts":
          this.titles = "通讯录";
          this.show1 = true;
          break;
        case "/app/find":
          this.titles = "发现";
          break;
        case "/app/my":
          this.titles = "我";
          // this.show2 = true;
          break;
      }
    }
  }
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../styls/main.less");
.header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background: #eee;
  .header_one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .h(40);
    span {
      .fs(16);
      width: 70%;
      .padding(0, 0, 0, 15);
    }
    i {
      .fs(14);
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      i {
        .fs(16);
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ul {
        position: absolute;
        .top(45);
        .right(10);
        .w(150);
        background: #666;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .h(50);
          span {
            .fs(14);
            width: 70%;
            color: #fff;
            border-bottom: 1px solid #eee;
            height: 100%;
            display: flex;
            align-items: center;
          }

          i {
            .fs(16);
            width: 30%;
            text-align: center;
            color: #fff;
          }
        }
        li:last-child {
          span {
            border: none;
          }
        }
      }
    }
  }
  .header_two {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    .h(40);
    i {
      .fs(16);
      width: 10%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.gaoliang {
  background: #ccc;
}
</style>
