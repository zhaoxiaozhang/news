<template>
  <div>
    <mt-header fixed title="重磅·头条号" class="fex_header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back()"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content">
      <div class="top">
        <h2>{{ $store.state.list[id].title }}</h2>
        <span>{{ $store.state.list[id].src }}</span>
        <em>{{ $store.state.list[id].time }}</em>
      </div>
      <div class="product">
        <img src="$store.state.list[id].pic" alt>
        <div class="details" v-html=" $store.state.list[id].content"></div>
        <div class="recommend">
          <em>――</em>
          <span>相关推荐</span>
          <em>――</em>
        </div>
      </div>

      <div class="bt">
        <li v-for="(lists, conts) in $store.state.listNews" :key="conts">
          <router-link class="inner" :to="{ path: '/words', query: {conts} }">
            <div class="wrap_l">
              <p>{{ lists.title }}</p>
              <div class="boot">
                <span>{{ lists.src }}</span>
              </div>
            </div>
            <div class="wrap_r">
              <img v-lazy="lists.pic" :key="lists.pic">
            </div>
          </router-link>
        </li>
      </div>
    </div>
  </div>
</template>


<script>
import { randomId } from "../request/randomId.js";
import ScrollPosition from "../lib/scroll-position";
export default {
  data() {
    return {
      product: [],
      id: "",
      index: ""
    };
  },
  created() {
    this.getId();
    this.getNext();
  },
  mounted() {},
  methods: {
    getId() {
      this.id = this.$route.query.index;
    },
    getNext() {
      var ranId = randomId();
      var url =
        "http://api.jisuapi.com/news/get?channel=" +
        ranId +
        "&start=0&num=10&appkey=272f8fcb40a13a6e";
      this.$axios
        .get(url)
        .then(res => {
          this.$store.dispatch("productNews", res.data.result.list);
        })
        .catch(err => {
          console.log(err);
          if (err) {
            this.getNext();
          }
        });
    }
  },
  watch: {
    $route: function(route) {
      var query = route.query;
      this.index = query.index;
    }
  }
};
</script>


<style>
.content {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  overflow: scroll;
  justify-content: space-between;
}
.mint-header {
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
  font-weight: bold;
}
.mint-header.is-fixed {
  background: white;
}
.mint-header-title {
  font-size: 18px;
  font-weight: 600;
  font-family: "宋体";
  color: #222;
}
.mint-header {
  padding: 0 20px;
}
.mintui {
  font-size: 20px;
}

.top {
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;
}
.top h2 {
  font-size: 23px;
  margin: 8px 0;
  color: #5e6060;
  font-weight: 500;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.top span {
  font-size: 14px;
  margin-right: 8px;
}
.top em {
  font-size: 12px;
  font-style: normal;
}
.product {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 20px;
}
.product_wrap {
  padding: 0 30px;
}
.product img {
  box-sizing: border-box;
  /* padding: 0 15px; */
  width: 100%;
  height: auto;
}
.product .details {
  font-size: 17px;
  color: #505050;
  text-align: justify;
  line-height: 1.5;
}
.recommend {
  text-align: center;
}
.recommend span {
  margin: 0 10px;
}
hedaer {
  font-size: 17px;
  padding: 0 20px;
  font-weight: normal;
  line-height: 1.5;
  color: #505050;
}

.inner {
  padding: 12px 0 16px 0;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  border-bottom: 1px solid #cccccc;
}
.wrap_l {
  width: 200px;
}
.wrap_l p {
  margin: 0 0 5px 0;
  white-space: normal;
  font-size: 16px;
  line-height: 21px;
  color: #222;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.boot {
  color: #cccccc;
  font-size: 8px;
}
.boot span {
  margin-right: 10px;
}
.boot em {
  font-style: normal;
}
.wrap_r {
  width: 115px;
  height: 74px;
}
.wrap_r img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.tuijian {
  text-align: center;
  margin: 10px 0;
  background: white;
}
.tuijian span {
  margin: 0 5px;
  font-weight: bold;
  font-size: 15px;
}
.tuijian em {
  color: #cccccc;
}
.bt {
  margin-bottom: 50px;
}
.bt li {
  list-style: none;
}
</style>

