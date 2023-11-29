<template>
  <div class="bg-overview-bg">
    <div class="container pt-[60px]">
      <p class="text-hotel-name text-[32px] font-semibold">
        Secure your reservation
      </p>
    </div>
    <Covid class="mt-[30px]" />
    <div class="container flex justify-between">
      <div class="w-[850px]">
        <UserInfo />
      </div>
      <div class="w-[447px]">
        <Suspense>
          <AsyncSelectedHotel />
            <template #fallback>
              <SelectedHotelSkeleton />
            </template>
          </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineAsyncComponent} from 'vue'
import SelectedHotelSkeleton from './SelectedHotelSkeleton.vue';
import Covid from "@/components/Covid.vue";
import UserInfo from "./UserInfo.vue";
const AsyncSelectedHotel = defineAsyncComponent(() =>
  import('./SelectedHotel.vue')
)
// import SelectedHotel from "./SelectedHotel.vue";
</script>

<style scoped></style>
