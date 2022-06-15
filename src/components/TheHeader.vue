<template>
  <div class="header-container">
    <img
      v-if="theme == 'light'"
      class="header-img"
      src="../assets/images/bg-desktop-light.jpg"
      alt="Light"
    />
    <img
      v-if="theme == 'dark'"
      class="header-img"
      src="../assets/images/bg-desktop-dark.jpg"
      alt="Dark"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme);

    return {
      theme,
    };
  },
};
</script>

<style scoped>
.header-container {
  height: 40vh;
}
.header-img {
  width: 100%;
  height: 100%;
}
</style>
