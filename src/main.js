
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store.js';
import './lib/mint-ui@2.2.13i/style.css';
import axios from 'axios'
Vue.prototype.$axios = axios; //原型属性

import { Header, Search, Loadmore, Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Search.name, Search);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Button.name, Button);

import Lazyload from 'vue-lazyload'
Vue.use(Lazyload,{
  preLoad: 1.0,
  error: require('./picture/err.jpg'),
  loading:require('./picture/loading.jpg')
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
