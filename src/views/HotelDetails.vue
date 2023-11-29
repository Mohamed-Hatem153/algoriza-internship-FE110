<template>
  <div>
    <NavBar />
    <HotelHeader />
    <HotelOverView />
    <Covid />
    <Footer />
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Covid from "@/components/Covid.vue";
import Footer from "@/components/Footer.vue";
import HotelHeader from "@/components/HotelDetails/HotelHeader.vue";
import HotelOverView from "@/components/HotelDetails/HotelOverView.vue";
</script>
