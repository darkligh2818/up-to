import { createStore } from 'vuex'

export default createStore({
  state: {
    persons: [
      "D"
    ],
    removeX: false
  },
  getters: {
  },
  mutations: {
    GET_GOAL(state, foo) {
      state.persons.push(foo)  
    },
    GET_X(state) {
      state.removeX = !state.removeX;
    },
  },
  actions: {
    getGoal(context, goal) {
      context.commit('GET_GOAL', goal)
    },
    getX(context) {
      context.commit('GET_X');
    },
  },
  modules: {
  }
})
