import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Rudimentary sign-in token (currently username)
    currentUser:"",
    // substitute for backend database
    registeredUsers:[{name:"bob", password:"bygg"}],
  },
  mutations: {
    updateCurrentUser (state, newUser) {
      state.currentUser = newUser
    }
  },
  actions: {
  },
  modules: {
  }
})
