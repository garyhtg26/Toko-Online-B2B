import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import secureLS from 'secure-ls'
var ls = new secureLS({
  encodingType: 'aes',
  encryptionSecret: '^77asj12@skdjasdk',
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentication: {},
  },
  mutations: {
    authentication(state, val) {
      state.authentication = val
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
})
