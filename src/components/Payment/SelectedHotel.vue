<template>
  <div class="mt-[30px] w-full rounded-md">
    <div class="w-full">
      <img
        src="../../assets/img/Payment/Rectangle 68.png"
        alt="Hotel image"
        loading="lazy"
        class="w-full"
      />
    </div>
    <div class="bg-white p-5">
      <p class="text-lg font-medium text-hotel-name mb-[7px]">
        {{ searchStore.selectedHotel[0].hotel_name }}
      </p>
      <p class="text-place-holder text-sm font-normal mb-[25px]">
        <span class="fa fa-star checked text-[#F2994A]"></span>
        <span class="fa fa-star checked text-[#F2994A]"></span>
        <span class="fa fa-star checked text-[#F2994A]"></span>
        <span class="fa fa-star checked text-[#F2994A]"></span>
        <span class="fa fa-star"></span>4.0 ({{
          searchStore.selectedHotel[0].review_nr.toFixed(1)
        }}
        Reviews)
      </p>
      <p
        v-if="
          searchStore.selectedHotel[0].aggregated_data.has_nonrefundable == 1
        "
        class="text-hotel-badge text-sm mb-2"
      >
        Non refundable
      </p>
      <p
        v-if="searchStore.selectedHotel[0].aggregated_data.has_refundable == 1"
        class="text-hotel-badge text-sm mb-2"
      >
        Refundable
      </p>
      <p class="text-place-holder text-sm font-normal mb-2">Check in : {{ searchStore.selectedHotel[0].arrival_date }}</p>
      <p class="text-place-holder text-sm font-normal mb-2">Check out : {{ searchStore.selectedHotel[0].departure_date }}</p>
      <p class="text-place-holder text-sm font-normal">2 night stay</p>
    </div>
  </div>
</template>

<script setup>
import { useSearchStore } from "@/stores/UserStore";
const searchStore = useSearchStore();
</script>

<style scoped></style>
