<script setup>
import Header from "@/components/Header.vue";
import HomeView from "@/views/HomeView.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <div class="container">
    <div class="header">
      <Header/>
    </div>

    <RouterView/>

    <div class="footer">
      <Footer/>
    </div>
  </div>

</template>

<style scoped>
.header {
  width: 100%;
  margin: 0;
}

.footer{
  width:100%;
  position: fixed;
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 5px;
  bottom: 0;
  left: 0;
  background-color: #f2f2f2;
}
</style>

