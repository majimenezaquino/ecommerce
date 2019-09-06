import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
const { HOST_URL, DB_LOCAL } = require('@/config')
let _usuario = function() {
  let usuario = localStorage.getItem(DB_LOCAL) || undefined;
  if (usuario != undefined) return JSON.parse(usuario)
  return undefined;
}();



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: _usuario || {
      token: undefined,
      estado: undefined,
      primer_apellido: undefined,
      primer_nombre: undefined,
      usuario: undefined,
      login: false,

  },
   status: ''

  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
  },
  auth_success(state, usuario) {
      state.usuario = usuario;
  },
  auth_error(state) {
      state.status = 'error'
  },
  logout(state) {
      state.status = ''
  },

  },
  actions: {
    login({ commit }, usuario) {
      return new Promise((resolve, reject) => {
          commit('auth_request')

          axios.defaults.headers.common['Authorization'] = 'Bearer BearerToken'
          axios({ url: `${HOST_URL}/iniciar_sesion`, data: usuario, method: 'POST' })
              .then(resp => {

                  if (resp.data.success) {

                      let usuario = resp.data.usuario;
                      usuario.token = resp.data.token;
                      usuario.login = true;
                      localStorage.setItem(DB_LOCAL, JSON.stringify(usuario))
                      axios.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`
                      commit('auth_success', usuario)
                      resolve(resp)
                  } else {
                      commit('auth_error')
                      localStorage.removeItem(DB_LOCAL)
                      reject(resp.data.message)
                  }

              })
              .catch(err => {
                  commit('auth_error')
                  localStorage.removeItem(DB_LOCAL)
                  reject(err.response)
              })
      })
  }

  },
});
