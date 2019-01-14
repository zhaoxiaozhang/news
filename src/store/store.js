import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  routerChange: true, //路由变化
  list: [],
  listNews: [],
  cont: '',
}
const mutations = {
  SUCCESS(state, comments) {
    state.list = comments
  },
  LOADING(state, loadings) {
    state.list = state.list.concat(loadings)
  },
  ADDCONT(srate, ranCont) {
    state.cont = ranCont
  },
  LISTNEWS(state, listNews) {
    state.listNews = listNews
  }
}
const actions = {
  addList({
    commit
  }, comments) {
    commit('SUCCESS', comments)
  },
  loading({
    commit
  }, loadings) {
    commit('LOADING', loadings)
  },
  addCont({
    commit
  }, ranCont) {
    commit('ADDCONT', ranCont)
  },
  productNews({
    commit
  }, listNews) {
    commit('LISTNEWS', listNews)
  }
}
const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
