<template>
  <div>
    <NavBar />
    <HeroSection />
    <keep-alive>
      <SearchForm
        v-if="location"
        :location="location"
        :checkIn="checkIn"
        :checkOut="checkOut"
        :guests="guests"
        :rooms="rooms"
      />
    </keep-alive>
    <SearchResultsLayout />
    <Covid />
    <Footer />
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import SearchForm from "@/components/SearchForm.vue";
import Covid from "@/components/Covid.vue";
import Footer from "@/components/Footer.vue";
import SearchResultsLayout from "@/components/SearchResults/SearchResultLayout.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useSearchStore } from "@/stores/UserStore";
const location = ref(null);
const checkIn = ref(null);
const checkOut = ref(null);
const guests = ref(null);
const rooms = ref(null);
const route = useRoute();
const searchStore = useSearchStore();
onMounted(() => {
  location.value = route.query.location;
  checkIn.value = route.query.checkIn;
  checkOut.value = route.query.checkOut;
  guests.value = route.query.guests;
  rooms.value = route.query.rooms;
  if (route.query.location) {
    searchStore.getResults(
      route.query.location,
      route.query.checkIn,
      route.query.checkOut,
      route.query.guests,
      route.query.rooms
    );
    searchStore.hotelDestinations = route.query.location
    searchStore.checkInDate = route.query.checkIn
    searchStore.checkOutDate = route.query.checkOut
    searchStore.guests = route.query.guests
    searchStore.rooms = route.query.rooms
    searchStore.getSortByOptions();
  }
});
</script>
