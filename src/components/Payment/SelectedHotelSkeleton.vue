<template>
    <div>
      <div>
        <AnimatedPlaceholder
          height="100px"
          width="100px"
          borderRadius="50%"
        />
      </div>
      <div>
        <AnimatedPlaceholder height="36px" width="200px" />
        <div class="flex flex-col gap-2 w-full">
          <AnimatedPlaceholder height="16px" />
          <AnimatedPlaceholder height="16px" />
          <AnimatedPlaceholder height="16px" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import AnimatedPlaceholder from '../Skeleton/AnimatedPlaceholder.vue';
  </script>
  
  <style scoped>
  
  </style>
  