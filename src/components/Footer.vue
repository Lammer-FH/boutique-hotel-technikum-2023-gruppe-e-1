<script>
import { BIconInstagram, BIconYoutube } from "bootstrap-icons-vue";

export default {
  name: "Footer",
  components: {
    BIconInstagram,
    BIconYoutube,
  },
};
</script>

<template>
  <b-navbar toggleable type="light" variant="light" class="container-fluid fixed-bottom">
    <b-navbar-nav>
      <RouterLink to="/imprint">Impressum</RouterLink>
    </b-navbar-nav>

    <b-navbar-nav>
      <div class="container">
        <a href="instagram.com">
          <BIconInstagram class="me-3"></BIconInstagram>
        </a>
        <a href="https://www.youtube.com/watch?v=mP07Oyr7enQ">
          <BIconYoutube></BIconYoutube>
        </a>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
