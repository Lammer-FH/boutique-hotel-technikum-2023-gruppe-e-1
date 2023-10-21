<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <div class="wrapper">

    <div class="header-container">
      <Header/>
    </div>

    <div class="view-container">
      <RouterView/>
    </div>

    <div class="footer-container">
      <Footer/>
    </div>
  </div>

</template>

<style scoped>

.header-container {
  width: 100%;
  position: fixed;
  height: fit-content;
  top: 0;
  left: 0;
  background-color: #f2f2f2;
}

.view-container {
  margin-top: 10vh
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
}

</style>

