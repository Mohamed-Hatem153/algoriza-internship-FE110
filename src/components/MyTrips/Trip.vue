<template>
  <div
    class="w-[1030px] p-5 pr-6 flex justify-between mb-6 bg-white rounded-[5px]"
  >
    <div class="flex">
      <div class="flex items-center">
        <img
          src="../../assets/img/Trips/Rectangle 32.png"
          alt="hotel image"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col justify-center ml-6">
        <p class="text-xl font-medium text-hotel-name mb-[7px]">
          {{ props.trip.hotel_name }}
        </p>
        <p class="text-place-holder text-sm font-normal mb-[30px]">
          <span class="fa fa-star checked text-[#F2994A]"></span>
          <span class="fa fa-star checked text-[#F2994A]"></span>
          <span class="fa fa-star checked text-[#F2994A]"></span>
          <span class="fa fa-star checked text-[#F2994A]"></span>
          <span class="fa fa-star mr-1"></span>4.0 ({{
          props.trip.review_nr.toFixed(1)
        }}
        Reviews)
        </p>
            <p
        v-if="
          props.trip.aggregated_data.has_nonrefundable == 1
        "
        class="text-hotel-badge text-sm mb-2"
      >
        Non refundable
      </p>
      <p
        v-if="props.trip.aggregated_data.has_refundable == 1"
        class="text-hotel-badge text-sm mb-2"
      >
        Refundable
      </p>
        <p class="text-place-holder text-sm font-normal mb-2">
          Check in: {{ props.trip.arrival_date }}
        </p>
        <p class="text-place-holder text-sm font-normal mb-2">
          Check out: {{ props.trip.departure_date }}
        </p>
        <p class="text-place-holder text-sm font-normal">2 night stay</p>
      </div>
    </div>
    <div class="flex flex-col items-end justify-end">
      <div class="flex items-end">
        <!-- <p v-if="props.hotel.property.priceBreakdown.strikethroughPrice" class="text-hotel-badge text-sm font-medium line-through mr-2">${{ props.hotel.property.priceBreakdown.strikethroughPrice.value.toFixed() }}</p> -->
        <p v-if="props.trip.composite_price_breakdown.strikethrough_amount" class="text-hotel-badge text-sm font-medium line-through mr-2">
          {{ props.trip.composite_price_breakdown.strikethrough_amount.amount_rounded }}
        </p>
        <p class="text-links-color text-xl font-medium">{{ props.trip.composite_price_breakdown.gross_amount.amount_rounded }}</p>
      </div>
      <p class="text-links-color text-sm font-light mb-4">
        Includes taxes and fees
      </p>
      <Button
        value="View trip details"
        class="w-fit"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import {defineProps, onMounted} from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
import {useSearchStore} from '@/stores/UserStore'
const searchStore = useSearchStore()
const redirectToTrip = () => {
  router.push({ name: "hotel-details" });
};
const props = defineProps(['trip'])
onMounted(()=>{
  console.log(props.trip)
  console.log(searchStore.userAllTrips)
})
</script>

<style lang="scss" scoped></style>
