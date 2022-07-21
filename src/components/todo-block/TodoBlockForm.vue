<template>
  <div class="input-section">
    <form @submit.prevent="addTask">
      <input
        v-model="taskValue"
        class="todo-input"
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const taskValue = ref("");
    const filter = ref("all");

    // Добавление задачи
    function addTask() {
      if (taskValue.value) {
        store.commit("SAVE_TASK", { content: taskValue.value, status: false });
        store.commit("ADD_FILTER", filter.value);

        taskValue.value = "";
      }
    }

    return {
      taskValue,
      addTask,
    };
  },
};
</script>

<style scoped>
.input-section {
  margin-bottom: 30px;
}
.todo-input {
  border: none;
  outline: none;

  background-color: var(--c-background-elements);
  box-shadow: 0 0 3px var(--c-item-border);
  color: var(--c-text);
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  border-radius: 5px;
  width: 100%;
  padding: 20px;
}
.todo-input::placeholder {
  color: var(--c-text);
}
</style>
