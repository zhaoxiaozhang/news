<template>
  <div class="container">
    <div class="wrap">
      <mt-loadmore :top-method="loadTop" 
      :bottom-method="loadBottom" 
      ref="loadmore"
      :autoFill="false">
           <!-- :bottom-all-loaded="allLoaded" -->
        <ul class="mint_wrap">         
          <li v-for="(items, index) in $store.state.list" :key="index">
            <router-link tag="div" class="inner" :to="{ path: '/words', query: {index} }">
            <div class="wrap_l">
              <p>{{ items.title }}</p>
              <div class="boot">
                <span>{{ items.src }}</span><em>{{ items.time }}</em>
              </div>
            </div>
              <div class="wrap_r">
                <img v-lazy="items.pic" :key="items.pic">
              </div>
            </router-link>
          </li>
        </ul>
      </mt-loadmore>   
    </div>
  </div>
</template>

<script>
import mui from '../lib/mui/mui.js'
import { randomId } from '../request/randomId.js'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {

    }
  },
  created(){
    var name = this.$route.params.items.name
    console.log(name)
    this.getNews(name) 
    
  },
  computed:{

  },
  methods: {
    addConts(){
    },
    getNews(name){
      // this.addConts()
      var url = 'http://api.jisuapi.com/news/get?channel='+ name +'&start='+ this.$store.state.cont +'&num=10&appkey=272f8fcb40a13a6e'
      this.$axios.get(url).then( res=> {
        this.$store.dispatch('addList', res.data.result.list)
        console.log(this.$store.state.list)
      })
      .catch(err=>{
        this.getNews(name)
      })
    },
    loadTop(){
      //加载更多数据
      this.getNews(name)
      this.$refs.loadmore.onTopLoaded(); 
    },

    loadBottom() {
      //加载更多数据
      this.getNews(name)
      this.allLoaded = false;
      this.$refs.loadmore.onBottomLoaded();
    }

 
  },
	beforeRouteLeave (to, from, next) {
			this.scrollTop = document.querySelector('.wrap').scrollTop
			next()
		},
	beforeRouteEnter (to, from, next) {
			next(vm => {
				document.querySelector('.wrap').scrollTop = vm.scrollTop
			})
	},


}
</script>


<style>

a{
  text-decoration: none;
}
.container{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
}
.wrap{
  height: 100%;
  /* overflow: auto; */
  overflow-y: scroll; 
   -webkit-overflow-scrolling: touch;
  /* overflow: hidden; */
}
.mint-loadmore{
  margin-bottom: 40px;
}
.mint_wrap{
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
}
.mint_wrap li{
  list-style: none;
}
.inner{
  padding: 12px 0  16px 0;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  border-bottom: 1px solid #cccccc;
}
.wrap_l{
  width: 200px;
}
.wrap_l p{
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
.boot{
  color: #cccccc;
  font-size: 8px;
}
.boot span{
  margin-right: 10px;
}
.boot em{
  font-style: normal;
}
.wrap_r{
  width: 115px;
  height: 74px;
}
.wrap_r img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
