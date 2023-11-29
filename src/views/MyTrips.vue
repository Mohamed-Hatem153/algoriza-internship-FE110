<template>
  <div>
    <NavBar />
    <TripsLayout />
    <Covid />
    <Footer />
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import TripsLayout from "@/components/MyTrips/TripsLayout.vue";
import Covid from "@/components/Covid.vue";
</script>
