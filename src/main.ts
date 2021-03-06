import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios'
const { DB_LOCAL } = require('@/config')
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.prototype.$http = Axios;
const usuario = function() {
    let usuario = localStorage.getItem(DB_LOCAL) || undefined;
    if (usuario != undefined) return JSON.parse(usuario)
    return undefined;
}() || undefined;


if (usuario) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`
} else {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer BearerToken'
}

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
