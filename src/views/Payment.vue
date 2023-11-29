<template>
  <div>
    <NavBar />
    <PaymentLayout />
    <Footer />
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import PaymentLayout from "@/components/Payment/PaymentLayout.vue";
</script>
