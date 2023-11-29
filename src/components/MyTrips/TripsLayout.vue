<template>
  <div class="w-full flex flex-col items-center bg-overview-bg">
    <div class="containet">
      <p
        class="w-[1030px] text-hotel-name text-[32px] font-semibold mt-[60px] mb-[28px]"
      >
        My trips
      </p>
      <!-- <div v-for="trip in trips" :key="trip.hotel_id" >
        <Trip v-if="trips" :prop="trip"/>
        import { useSearchStore } from '@/stores/UserStore';
      </div> -->
      <div v-for="trip in trips" :key="trip.hotel_id" >
        <Suspense>
          <AsyncTrip :trip="trip"/>
            <template #fallback>
              <TripSkeleton />
            </template>
          </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,defineAsyncComponent} from 'vue'
import TripSkeleton from './TripSkeleton.vue'
const AsyncTrip = defineAsyncComponent(() =>
  import('./Trip.vue')
)
// import Trip from "./Trip.vue";
const trips = ref(null)
if(localStorage.getItem("userTrips")){
  trips.value = JSON.parse(localStorage.getItem("userTrips"));
};
import {useSearchStore} from '@/stores/UserStore'
const searchStore = useSearchStore()

</script>

<style scoped></style>
