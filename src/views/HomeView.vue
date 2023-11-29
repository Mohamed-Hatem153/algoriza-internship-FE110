<template>
  <div>
    <NavBar />
    <HeroSection />
    <keep-alive>
      <SearchForm />
    </keep-alive>
    <Covid />
    <EnjoyYourDream />
    <getInispiration />
    <PopularHotels />
    <DownloadApp />
    <Footer />
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import SearchForm from "@/components/SearchForm.vue";
import Covid from "@/components/Covid.vue";
import EnjoyYourDream from "@/components/EnjoyYourDream.vue";
import getInispiration from "@/components/getInispiration.vue";
import PopularHotels from "@/components/PopularHotels.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import Footer from "@/components/Footer.vue";
</script>
