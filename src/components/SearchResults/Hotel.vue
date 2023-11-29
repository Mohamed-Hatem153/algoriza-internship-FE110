<template>
  <div class="grid grid-cols-3 p-5 rounded border-2 gap-6 max-h-full">
    <div class="">
      <img
        :src="props.hotel.property.photoUrls[0]"
        class="w-72 h-48"
        loading="lazy"
      />
    </div>
    <div class="grid grid-cols-3 col-span-2 gap-4">
      <div class="col-span-2 flex flex-col justify-between">
        <p class="text-hotel-name text-xl font-medium">
          {{ props.hotel.property.name }}
        </p>
        <p class="text-place-holder text-sm font-normal">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <!-- <vue-star-rating
                            :value="(props.hotel.property.reviewScore/2).toFixed(1)"
                            :size="10"
                            :show-rating="false"
                            ></vue-star-rating> -->
          <span class="fa fa-star"></span>
          {{ (props.hotel.property.reviewScore / 2).toFixed(1) }} ({{
            props.hotel.property.reviewCount
          }}
          Reviews)
        </p>
        <p class="text-place-holder text-xs font-normal">
          {{ props.hotel.accessibilityLabel.slice(0, 160) + "..." }}
        </p>
        <router-link
          :to="{
            name: 'hotel-details',
            params: { hotelId: props.hotel.hotel_id },
          }"
        >
          <Button value="See availability" class="w-fit" />
        </router-link>
      </div>
      <div class="flex flex-col items-end justify-between">
        <p
          v-if="props.hotel.property.priceBreakdown.benefitBadges[0]"
          class="bg-hotel-badge text-white text-sm font-medium p-2 rounded"
        >
          {{ props.hotel.property.priceBreakdown.benefitBadges[0].text }}
        </p>
        <p></p>
        <div class="flex flex-col items-end">
          <div class="flex items-end">
            <p
              v-if="props.hotel.property.priceBreakdown.strikethroughPrice"
              class="text-hotel-badge text-sm font-medium line-through mr-2"
            >
              ${{
                props.hotel.property.priceBreakdown.strikethroughPrice.value.toFixed()
              }}
            </p>
            <p class="text-links-color text-xl font-medium">
              ${{
                props.hotel.property.priceBreakdown.grossPrice.value.toFixed()
              }}
            </p>
          </div>
          <p class="text-links-color text-sm font-light">
            Includes taxes and fees
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../Button.vue";
// import VueStarRating from 'vue-star-rating';
import { defineProps } from "vue";
const props = defineProps(["hotel"]);
</script>

<style scoped>
.checked {
  color: orange;
}
</style>
