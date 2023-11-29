<template>
  <div class="container h-72 text-white mt-16">
    <div
      class="relative px-16 bg-[url('../assets/img/DownloadApp/Rectangle18.png')] bg-cover bg-center bg-no-repeat h-full w-full rounded-lg flex justify-center items-center"
    >
      <!-- <div class="absolute top-0 bottom-0 left-0 right-0 bg-overlay-bg rounded-lg"></div> -->
      <div class="flex flex-col items-start justify-center h-full w-full">
        <p class="text-2xl font-semibold text-white z-10 mb-7">
          Download the mobile application for bonus coupons and travel codes
        </p>
        <Button value="Download mobile app" />
      </div>
      <div class="h-full w-full">
        <img
          src="../assets/img/DownloadApp/Isolated_right_hand_with_smartphone 2.png"
          alt="Isolated_right_hand_with_smartphone"
          class="h-full w-full"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button.vue";
</script>
