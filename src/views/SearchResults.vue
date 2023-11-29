<template>
    <div>
      <NavBar />
      <HeroSection />
      <keep-alive>
        <SearchForm />
      </keep-alive>
      <SearchResultsLayout />
      <Covid />
      <Footer />
    </div>
  </template>
  
  <script setup>
  // @ is an alias to /src
  import NavBar from '../components/NavBar.vue'
  import HeroSection from '@/components/HeroSection.vue';
  import SearchForm from '@/components/SearchForm.vue';
  import Covid from '@/components/Covid.vue'
  import Footer from '@/components/Footer.vue'
  import SearchResultsLayout from '@/components/SearchResults/SearchResultLayout.vue'
  
  </script>
  