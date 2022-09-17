import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      
    ],
  },
  getters: {
  },
  mutations: {
    GET_GOAL(state, foo) {
      state.todos.push(foo)  
    },
    DELETE_GOAL(state, goal) {
      state.todos.splice(goal, 1);
    },
  },
  actions: {
    getGoal(context, goal) {
      context.commit('GET_GOAL', goal)
    },
    deleteGoal(context, goal) {
      context.commit('DELETE_GOAL', goal);
    },
  },
  modules: {
  }
})
