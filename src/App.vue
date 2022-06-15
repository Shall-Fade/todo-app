<template>
  <TheHeader />
  <TodoBlock />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TodoBlock from "./components/todo-block/TodoBlock.vue";
export default {
  components: {
    TheHeader,
    TodoBlock,
  },
};
</script>

<style>
@import "./assets/base.css";
</style>
