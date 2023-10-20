<script setup>
import Header from "@/components/Header.vue";
import HomeView from "@/views/HomeView.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <div class="header">
  <Header/>
  </div>

  <RouterView/>

  <div class="footer">
  <Footer/>
  </div>

</template>

<style scoped>


.footer{
  width:100%;
  position: fixed;
  height: 20%;
  bottom: 0;
  left: 0;
  background-color: #f2f2f2;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

