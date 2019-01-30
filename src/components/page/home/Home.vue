<template>
  <div class="home">
    <ul class="home_ul">
      <li class="home_li" v-for="(item,idx) in lists" :key="idx" @click="goPage(item.name)">
        <img :src="item.url" alt class="home_img">
        <div class="home_con">
          <div class="title">
            <span v-text="item.name"></span>
            <span v-text="item.time"></span>
          </div>
          <div class="content">
            <span v-text="item.conten"></span>
            <i></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          url: require("../../../assets/imgs/1.jpg"),
          name: "小微信",
          conten: "朝辞白帝彩云间",
          time: "1111112323",
          isshow: false
        },
        {
          url: require("../../../assets/imgs/2.jpg"),
          name: "小微",
          conten: "朝辞白帝彩云间",
          time: "1111112323",
          isshow: false
        },
        {
          url: require("../../../assets/imgs/3.jpg"),
          name: "小白",
          conten: "朝辞白帝彩云间",
          time: "1111112323",
          isshow: false
        },
        {
          url: require("../../../assets/imgs/4.jpg"),
          name: "小黑",
          conten: "朝辞白帝彩云间",
          time: "1111112323",
          isshow: false
        },
        {
          url: require("../../../assets/imgs/5.jpg"),
          name: "小名",
          conten: "朝辞白帝彩云间",
          time: "1111112323",
          isshow: false
        }
      ]
    };
  },
  methods: {
      goPage(name){
          this.$router.push('/message');
          console.log(name);
      }
  }
};
</script>
<style lang="less" scoped>
@import "../../../styls/main.less";
.home {
    .margin(40,0,0,0);
  .home_ul {
    .home_li {
      display: flex;
      justify-content: flex-start;
      align-items:center;
      .padding(0,0,0,10);
      .home_img {
        .w(50);
        .h(45);
      }
      .home_con {
        width: 100%;
        .padding(10,10,10,10);
        .margin(0,0,0,10);
        border-bottom:1px solid #eee;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .title{
            display: flex;
        justify-content: space-between;
            .fs(14);
            span{
                .padding(5,0,5,0);
            }
        }
        .content{
             display: flex;
        justify-content: space-between;
            .fs(14);
            span{
                .padding(5,0,5,0);
            }
        }
      }
    }
  }
}
</style>

