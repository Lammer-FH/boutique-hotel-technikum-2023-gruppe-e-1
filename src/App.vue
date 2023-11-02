<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

    <div class="header-container">
      <Header/>
    </div>

    <div class="container-fluid">
      <RouterView/>
    </div>

    <div class="footer-container">
      <Footer/>
    </div>

</template>

<style scoped>

.header-container {
  width: 100%;
  position: fixed;

  top: 0;
  left: 0;
  background-color: #f2f2f2;
  z-index: 1;
}

.footer-container {
  width: 100%;
  position: fixed;
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 5px;
  bottom: 0;
  left: 0;
  background-color: #f2f2f2;
  z-index: 1;
}

</style>

