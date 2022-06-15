<template>
  <li class="list-item" v-for="(task, index) in tasksFiltered" :key="index">
    <div>
      <input
        :id="`task-checkbox-${index}`"
        class="check-input"
        type="checkbox"
        v-model="task.status"
      />
      <label class="check-btn" :for="`task-checkbox-${index}`"></label>
      <p :class="{ 'active-task': task.status }" class="check-task">
        {{ task.content }}
      </p>
    </div>
    <button @click="removeTask(index)" class="delete-btn">
      <img
        :class="{ 'hide-remove': filter !== 'all' }"
        src="../../assets/images/icon-cross.svg"
        alt="Delete"
      />
    </button>
  </li>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const filter = computed(() => store.state.filter);
    const tasks = computed(() => store.state.tasks);

    // Удаление задачи
    function removeTask(index) {
      if (filter.value == "all") {
        tasks.value.splice(index, 1);
      }
    }

    // Фильтрация задач
    const tasksFiltered = computed(() => {
      if (filter.value == "all") {
        return tasks.value;
      } else if (filter.value == "active") {
        return tasks.value.filter((task) => !task.status);
      } else if (filter.value == "completed") {
        return tasks.value.filter((task) => task.status);
      }
      return tasks.value;
    });

    return {
      filter,
      tasksFiltered,
      removeTask,
    };
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
  padding: 20px;
  overflow: hidden;
}
.list-item div {
  position: relative;
}
.check-input {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
.check-btn {
  position: absolute;
  bottom: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
}
.check-task {
  margin-left: 40px;
  margin-right: 10px;
}
.check-btn:hover {
  transition: 0.3s ease;
}
.check-input:checked + .check-btn::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("../../assets/images/icon-check.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
.hide-remove {
  display: none;
}
.active-task {
  text-decoration: line-through;
  opacity: 0.3;
}
@media only screen and (max-width: 425px) {
  .check-task {
    font-size: 16px;
  }
}
</style>
