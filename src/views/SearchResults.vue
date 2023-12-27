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
import {onMounted, ref } from 'vue'
const location = ref(null);
const checkIn = ref(null);
const checkOut = ref(null);
const guests = ref(null);
const rooms = ref(null);
const route = useRoute();
onMounted(() => {
  location.value = route.query.location;
  checkIn.value = route.query.checkIn;
  checkOut.value = route.query.checkOut;
  guests.value = route.query.guests;
  rooms.value = route.query.rooms;
});
</script>
