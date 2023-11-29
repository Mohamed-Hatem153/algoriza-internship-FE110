<template>
  <main>
    <router-view />
  </main>
</template>
<script setup>
import { onMounted } from "vue";
import { useUserStore } from "./stores/UserStore";
const userStore = useUserStore();
onMounted(() => {
  userStore.checkLocalStorage();
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
