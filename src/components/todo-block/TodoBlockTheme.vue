<template>
  <div class="theme-section">
    <h1 class="theme-title">Todo</h1>
    <button @click="switchTheme" class="theme-btn">
      <img
        v-if="isLight"
        class="theme-img"
        src="../../assets/images/icon-moon.svg"
        alt="Dark Theme"
      />
      <img
        v-else
        class="theme-img"
        src="../../assets/images/icon-sun.svg"
        alt="Light Theme"
      />
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const isLight = computed(() => store.state.isLight);
    let currentTheme = isLight.value;

    onMounted(() => {
      document.documentElement.setAttribute("data-theme", "light");
    });

    // Функция смена темы
    function switchTheme() {
      currentTheme = !isLight.value;
      store.commit("SWITCH_THEME", currentTheme);

      if (isLight.value === true) {
        document.documentElement.setAttribute("data-theme", "light");
      } else if (isLight.value === false) {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }

    return {
      isLight,
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
  color: #fff;
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
