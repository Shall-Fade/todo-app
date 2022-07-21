import { createStore } from "vuex";

const store = createStore({
  state: {
    tasks: [],
    filter: "all",
    isLight: true,
  },
  getters: {
    activeTasks(state) {
      return state.tasks.filter((task) => task.status === false).length;
    },
  },
  mutations: {
    SAVE_TASK(state, task) {
      state.tasks.push(task);
    },
    ADD_FILTER(state, filter) {
      state.filter = filter;
    },
    SWITCH_THEME(state, isLight) {
      state.isLight = isLight;
    },
  },
});

export default store;
