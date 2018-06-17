import Vue from 'vue'
import App from './App.vue'

//importando reset css
import './assets/css/reset.css';

// importando o estilo global
import './assets/css/style.css';

//importando mansory grid
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry);

//importando a config do vuex
import store from './store/root';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
