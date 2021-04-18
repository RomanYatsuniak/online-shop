import { createStore } from 'vuex'
import {SET_AUTH_STATUS, SET_USER, ADD_TO_CART, REMOVE_FROM_CART} from "@/store/types"
import {db, auth} from "@/firebase"

export default createStore({
  state: {
    user: {
      name: '', isAdmin: false
    },
    isAuthenticated: false,
    cart: {

    }
  },
  getters: {
  },
  mutations: {
    [SET_USER] (state, user) {
      state.user = user.data()
    },
    [SET_AUTH_STATUS] (state, isAuth) {
      state.isAuthenticated = isAuth

    },
    [ADD_TO_CART] (state, product) {
      console.log(state, product);
    },
    [REMOVE_FROM_CART] (state, product) {
      console.log(state, product);

    }
  },
  actions: {
    async login({commit, dispatch}, loginData) {
      await auth.signInWithEmailAndPassword(loginData.email, loginData.password)
      commit(SET_AUTH_STATUS, auth.currentUser ? true : false)
      dispatch('getUserData', auth.currentUser.uid)
    },
    async getUserData({commit}, userId) {
      const user = await db.collection('users').doc(userId).get()

      commit(SET_USER, user)
    }
  },
  modules: {
  }
})
