<template>
  <div class="theme-section">
    <h1 class="theme-title">Todo</h1>
    <button @click="switchTheme" class="theme-btn">
      <img
        v-if="theme == 'light'"
        class="theme-img"
        src="../../assets/images/icon-moon.svg"
        alt="Dark Theme"
      />
      <img
        v-if="theme == 'dark'"
        class="theme-img"
        src="../../assets/images/icon-sun.svg"
        alt="Light Theme"
      />
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const theme = computed(() => store.state.theme);
    let mode = document.getElementById("mode");

    // Функция смена темы
    function switchTheme() {
      if (theme.value == "light") {
        store.commit("SWITCH_THEME", "dark");
        mode.href = "./src/assets/dark-mode.css";
      } else if (theme.value == "dark") {
        store.commit("SWITCH_THEME", "light");
        mode.href = "./src/assets/light-mode.css";
      }
    }

    return {
      theme,
      switchTheme,
    };
  },
};
</script>

<style scoped>
.theme-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.theme-title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 42px;
  letter-spacing: 7px;
}
.theme-btn {
  padding: 5px;
}
.theme-img {
  width: 25px;
  height: 25px;
}
@media only screen and (max-width: 425px) {
  .theme-title {
    font-size: 32px;
  }
}
</style>
