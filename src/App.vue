<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

    <div class="header-container">
      <Header/>
    </div>

    <div class="container-fluid mb-5">
      <RouterView/>
    </div>

    <div class="footer-container">
      <Footer/>
    </div>

</template>

<style scoped>

</style>

