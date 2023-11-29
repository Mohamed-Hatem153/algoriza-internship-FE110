<template>
  <button
    class="cursor-pointer text-sm font-medium tracking-wider text-white bg-button-color px-5 py-3 rounded-md hover:scale-105 duration-200 hover:border-gray-600 hover:from-black hover:to-gray-900"
  >
    {{ value }}
  </button>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["value"]);
</script>
