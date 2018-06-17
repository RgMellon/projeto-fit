import Vue from 'vue';
import Vuex from 'vuex';
import planos from './modules/planos/root';
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {planos},
});
