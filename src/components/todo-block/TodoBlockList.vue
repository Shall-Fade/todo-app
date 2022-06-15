<template>
  <div class="list-section">
    <!-- Блок с предупреждением (если список задач пуст) -->
    <div v-if="tasksLength === 0" class="list-empty">
      <h2 class="list-empty-title">Empty Block</h2>
      <p class="list-empty-emotion">(҂⌣̀_⌣́)</p>
      <p class="list-empty-description">Add some task</p>
    </div>
    <ul class="list">
      <!-- Генерация задачи -->
      <TodoBlockListItem />
      <!-- Настройка и фильтрация -->
      <li class="list-settings">
        <p class="list-counter">{{ activeTasks }} items left</p>
        <div class="btn-group">
          <button
            :class="{ 'list-btn-active': filter == 'all' }"
            @click="addFilter('all')"
            class="list-btn"
          >
            All
          </button>
          <button
            :class="{ 'list-btn-active': filter == 'active' }"
            @click="addFilter('active')"
            class="list-btn"
          >
            Active
          </button>
          <button
            :class="{ 'list-btn-active': filter == 'completed' }"
            @click="addFilter('completed')"
            class="list-btn"
          >
            Completed
          </button>
        </div>
        <button @click="clearCompleted" class="clear-btn">
          Clear Completed
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
// import { Container, Draggable } from "vue3-smooth-dnd";
import { useStore } from "vuex";
import { ref, onMounted, watchEffect, computed } from "vue";
import TodoBlockListItem from "./TodoBlockListItem.vue";
export default {
  components: { TodoBlockListItem },
  setup() {
    // Переменные
    const store = useStore();
    const tasks = computed(() => store.state.tasks);
    const filter = computed(() => store.state.filter);
    const activeTasks = computed(() => store.getters.activeTasks);
    const tasksLength = ref(0);

    // Общее количество задач
    onMounted(() => {
      watchEffect(() => {
        tasksLength.value = tasks.value.length;
      });
    });

    // Очистка завершенных задач
    function clearCompleted() {
      for (let i = 0; i < tasksLength.value; i++) {
        tasks.value.filter((task, index) => {
          if (task.status === true) {
            tasks.value.splice(index, 1);
          }
        });
      }
    }

    // Добавление фильтра
    function addFilter(filter) {
      store.commit("ADD_FILTER", filter);
    }

    return {
      filter,
      activeTasks,
      tasksLength,
      addFilter,
      clearCompleted,
    };
  },
};
</script>

<style scoped>
.list-empty {
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.list-empty-title,
.list-empty-emotion {
  font-size: 36px;
  font-weight: 700;
}
.list-empty-description {
  font-size: 24px;
}
.list,
.list-empty {
  list-style: none;
  border-radius: 5px;
}
.list-settings {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
}
.list-btn {
  margin: 0 5px;
  font-weight: 700;
  transition: 0.3s ease;
}
.list-btn,
.clear-btn {
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  transition: 0.3s ease;
}
@media only screen and (max-width: 425px) {
  .list-settings {
    font-size: 12px;
  }
  .list-btn,
  .clear-btn {
    font-size: 12px;
  }
}
</style>
