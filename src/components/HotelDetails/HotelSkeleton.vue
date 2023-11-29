<template>
    <div>
      <div>
        <AnimatedPlaceholder
          height="170px"
          width="400px"
          
        />
      </div>
      <div>
        <AnimatedPlaceholder height="36px" width="200px" />
        <div class="flex flex-col gap-2 w-full">
          <AnimatedPlaceholder height="36px" />
          <AnimatedPlaceholder height="36px" />
          <AnimatedPlaceholder height="36px" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import AnimatedPlaceholder from '../Skeleton/AnimatedPlaceholder.vue';
  </script>
  
  <style scoped>
  
  </style>
  