import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: []
  },
  mutations: {
    users (state, data) {
      state.users = data
    },
    user (state, data) {
      state.user = data
      console.log(state.user)
    },
    deleteUser (state, id) {
      const newUsers = state.users.filter(user => user.id !== id)
      state.users = newUsers
    }
  },
  actions: {
    getUsers (ctx) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          ctx.commit('users', res.data)
        })
    },
    getUser (ctx, id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          ctx.commit('user', res.data)
        })
    },
    deleteUser (ctx, id) {
      ctx.commit('deleteUser', id)
    }
  }
})
