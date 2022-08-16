import { createStore } from 'vuex'
import { v4 as uuidV4 } from 'uuid';

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Recolectar las piedras del infinito', completed: false },
      { id: 2, text: 'Piedra del alma', completed: true },
      { id: 3, text: 'Piedra del poder', completed: true },
      { id: 4, text: 'Piedras del realidad', completed: false },
      { id: 5, text: 'Conseguir secuaces competente', completed: false },
    ]
  },
  getters: {
  },
  mutations: {
    toggleTodo (state, id) {
      const todo = state.todos.find(t => t.id === id)
      todo.completed = !todo.completed
    },
    createTodo (state, text = '') {

      if(text.length === 0) return;

      state.todos.push({
        id: uuidV4(),
        completed: false,
        text
      })

    }
  },
  actions: {
  },
  getters: {
    pendingTodos: state => {
      return state.todos.filter(todo => !todo.completed)
    },
    allTodos: state => {
      return [...state.todos]
    },
    completedTodos: state => {
      return state.todos.filter(todo => todo.completed)
    },
    getTodosByTab: ( _ , getters) => ( tab ) => {
      switch (tab) {
        case 'pending':
          return getters.pendingTodos
        case 'completed':
          return getters.completedTodos
        default:
          return getters.allTodos
      }
    }
  },
  modules: {
  }
})
