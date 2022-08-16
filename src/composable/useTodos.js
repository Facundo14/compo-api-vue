import { computed, ref } from 'vue'
import { useStore } from 'vuex'


const useTodos = () => {
    const store = useStore();

    const currentTab = ref('all');

    
    return {
      currentTab,

      pendingTodos: computed(() => store.getters['pendingTodos']),
      getTodoByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
      toggleTodo: (id) => store.commit('toggleTodo', id),
      createTodo: (text) => store.commit('createTodo', text),
    }
}

export default useTodos;