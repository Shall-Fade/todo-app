<template>
  <div class="position-block">
    <div class="todo-container">
      <TodoBlockTheme />
      <TodoBlockForm />
      <TodoBlockList />
    </div>
  </div>
</template>

<script>
import TodoBlockTheme from "./TodoBlockTheme.vue";
import TodoBlockForm from "./TodoBlockForm.vue";
import TodoBlockList from "./TodoBlockList.vue";
export default {
  components: {
    TodoBlockTheme,
    TodoBlockForm,
    TodoBlockList,
  },
};
</script>

<style scoped>
.position-block {
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
}
.todo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
}
/* Общий размер блоков */
.theme-section,
.input-section,
.list-section {
  width: 500px;
}
@media only screen and (max-width: 768px) {
  .theme-section,
  .input-section,
  .list-section {
    width: 450px;
  }
}
@media only screen and (max-width: 530px) {
  .todo-container {
    width: 350px;
  }
  .theme-section,
  .input-section,
  .list-section {
    width: 340px;
  }
}
</style>
