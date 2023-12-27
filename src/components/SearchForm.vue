<template>
  <div class="container text-center">
    <form @submit.prevent="handleFormSubmit()">
      <div
        class="flex items-center justify-evenly gap-1 bg-white relative -mt-10 z-10 p-2 rounded-lg shadow-lg shadow-gray-500/50 w-[1130px] m-auto"
      >
        <div class="p-2 flex items-center bg-input-bg text-sm rounded">
          <div>
            <span><img src="../assets/img/location 1.png" /></span>
          </div>
          <div>
            <select
              v-if="searchStore.hotelDestination"
              v-model="hotelDestinations"
              class="py-2 px-2 pe-9 outline-none w-full bg-input-bg border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            >
              <option disabled selected>Where are you going?</option>
              <option
                v-for="h in updateFilteredItems"
                :key="h.dest_id"
                :value="h.dest_id"
                class="text-gray-600"
              >
                {{ h.city_name }}
              </option>
              <p v-if="checkDestErrorToggle" class="text-xs text-red-600">
                Please select your destination
              </p>
            </select>
          </div>
        </div>
        <div
          class="p-2 flex items-center bg-input-bg text-sm rounded w-[173px]"
        >
          <div>
            <span><img src="../assets/img/calendar 1.png" /></span>
          </div>
          <input
            v-model="checkInDate"
            :min="minDate"
            required
            type="date"
            placeholder="Check in date"
            class="p-2 bg-input-bg placeholder-place-holder outline-none w-[90%]"
          />
        </div>
        <div class="w-[173px]">
          <div
            class="p-2 flex items-center bg-input-bg text-sm rounded w-[173px]"
          >
            <div>
              <span><img src="../assets/img/calendar 1.png" /></span>
            </div>
            <input
              v-model="checkOutDate"
              :min="minDate"
              required
              type="date"
              placeholder="Check out date"
              class="p-2 bg-input-bg placeholder-place-holder outline-none w-[90%]"
            />
          </div>
          <p v-if="checkDateErrorToggle" class="text-xs text-red-600">
            Check out date must be after check in date
          </p>
        </div>

        <div
          class="p-2 flex items-center bg-input-bg text-sm rounded w-[148px]"
        >
          <div>
            <span><img src="../assets/img/user-square 2.png" /></span>
          </div>
          <input
            v-model="guests"
            required
            type="number"
            min="1"
            placeholder="Guests"
            class="p-2 bg-input-bg placeholder-place-holder outline-none w-4/5"
          />
        </div>
        <div
          class="p-2 flex items-center bg-input-bg text-sm rounded w-[147px]"
        >
          <div>
            <span><img src="../assets/img/single_bed.png" /></span>
          </div>
          <input
            v-model="rooms"
            required
            type="number"
            min="1"
            placeholder="Rooms"
            class="p-2 bg-input-bg placeholder-place-holder outline-none w-4/5"
          />
        </div>
        <div class="p-2 flex items-center text-sm">
          <Button value="Search" class="w-[134px]" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import { useRouter } from "vue-router";
// import axios from "axios";
import { ref, onMounted, computed , defineProps } from "vue";
import { useUserStore } from "@/stores/UserStore";
import { useSearchStore } from "@/stores/UserStore";
const hotelDestinations = ref("Where are you going?");
const checkInDate = ref("");
const checkOutDate = ref("");
const guests = ref("");
const rooms = ref("");
const checkDateErrorToggle = ref(false);
const checkDestErrorToggle = ref(false);
const minDate = ref("");
const router = useRouter();
const userStore = useUserStore();
const searchStore = useSearchStore();
const props = defineProps(['location','checkIn','checkOut','guests','rooms'])
//////////////
// const searchParams = {
//     location: hotelDestinations.value,
//     checkIn: checkInDate.value,
//     checkOut: checkOutDate.value,
//     guests: guests.value,
//     rooms: rooms.value,
//   };
/////////////////
const redirect = () => {
  return router.push({ name: "register" });
};
const redirectToResults = () => {
  return router.push({ name: "search-results" ,query: {
    location: searchStore.hotelDestinations,
    checkIn: searchStore.checkInDate,
    checkOut: searchStore.checkOutDate,
    guests: searchStore.guests,
    rooms: searchStore.rooms,
  }});
};
onMounted(() => {
  setMinDate();
  searchStore.getHotelDest();
  if(props.location){
    hotelDestinations.value= props.location
    checkInDate.value = props.checkIn
    checkOutDate.value = props.checkOut
    guests.value = props.guests
    rooms.value = props.rooms
  }
});
const setMinDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-indexed
  const day = today.getDate();

  // Format the date as 'YYYY-MM-DD' (required by the input type=date)
  minDate.value = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
};
const updateFilteredItems = computed(() => {
  if (searchStore.hotelDestination) {
    return (searchStore.hotelDestination = searchStore.hotelDestination.filter(
      (item) => item.city_name !== ""
    ));
  }
});
const handleFormSubmit = () => {
  // if(hotelDestinations.value == "Where are you going?"){
  //   // checkDestErrorToggle.value = true;
  //   alert("nooooooo")
  // }
  if (checkOutDate.value <= checkInDate.value) {
    checkDateErrorToggle.value = true;
  } else {
    checkDateErrorToggle.value = false;
    if (userStore.isAuth) {
      searchStore.getResults(
        hotelDestinations.value,
        checkInDate.value,
        checkOutDate.value,
        guests.value,
        rooms.value
      );
      searchStore.getSearchFormData(
        hotelDestinations.value,
        checkInDate.value,
        checkOutDate.value,
        guests.value,
        rooms.value
      );
      redirectToResults();
      searchStore.getSortByOptions();
    } else {
      redirect();
    }
  }
};
</script>
