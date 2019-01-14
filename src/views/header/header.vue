<template>
  <div>
    <div id="top">
      <mt-header fixed title class="top" style="background: #D43D3D"></mt-header>
      <mt-search fixed class="is-fixed" cancel-text></mt-search>
      <img src="../../picture/logo4.png" alt="logo" class="logo">
    </div>
    <div class="wrapper">
      <ul class="wrapul">
        <div v-for="(items, index) in channel" :key="index" @click="addColor(index)">
          <router-link tag="li" :to="{path: items.ul, query: {type: items.name}}">{{items.name}}</router-link>
        </div>
      </ul>
    </div>

    <keep-alive>
      <transition>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      channel: [
        { name: "头条", ul: "/home/all" },
        { name: "新闻", ul: "/home/news" },
        { name: "财经", ul: "/home/finance" },
        { name: "体育", ul: "/home/sport" },
        { name: "娱乐", ul: "/home/recreation" },
        { name: "军事", ul: "/home/military" },
        { name: "教育", ul: "/home/edu" },
        { name: "科技", ul: "/home/science" },
        { name: "股票", ul: "/home/stokct" },
        { name: "女性", ul: "/home/woman" },
        { name: "星座", ul: "/home/sign" },
        { name: "NBA", ul: "/home/NBA" },
        { name: "健康", ul: "/home/health" },
        { name: "育儿", ul: "/home/children" }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      var scrollx = new Bscroll(".wrapper", {
        scrollY: false,
        scrollX: true,
        click: true
      });
    });
  },
  mounted() {
    this.active()
  },
  methods: {
    active() {
      var lis = $(".wrapul>div");
      lis.eq(0).addClass("scrollActive");
    },
    addColor(index) {
      var lis = $(".wrapul>div");
      lis.removeClass("scrollActive");
      lis.eq(index).addClass("scrollActive");
    }
  }
};
</script>


<style>
/* * { touch-action: none; } */
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
#top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
}
.top {
  width: 100%;
  height: 50px !important ;
}
.mint-searchbar {
  position: absolute;
  right: 20px;
  padding: 0;
  width: 150px;
  height: 30px;
  background-color: #d43d3d;
  margin-top: 10px;
}
.mint-searchbar-core {
  border-radius: 20px;
}
.mint-searchbar-inner {
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  border-radius: 50px;
}
.logo {
  position: absolute;
  top: 0;
  z-index: 10;
  left: 25px;
}
.wrapper {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  background-color: #f4f5f6;
}
.wrapper ul {
  width: 700px;
  height: 40px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
}
.wrapper ul li {
  list-style: none;
  /* width: 50px;
	height: 40px;
	line-height: 41px; */
  text-align: center;
  font-family: "\6977\4F53";
}
.wrapper ul div {
  width: 50px;
  height: 40px;
  line-height: 41px;
  font-size: 16px;
}
.scrollActive {
  text-align: center;
  color: #F85959;
  font-size: 18px !important;
}
</style>
