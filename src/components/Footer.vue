<script>
import {BIconInstagram, BIconYoutube} from "bootstrap-icons-vue";

export default {
  name: "Footer",
  components: {
    BIconInstagram,
    BIconYoutube
  }
}
</script>

<template>

  <div class="container text-center">
    <div class="row">
      <div class="col-7">
        <RouterLink to="/imprint">Impressum</RouterLink>
      </div>
      <div class="col-2">
        <a href="instagram.com">
          <BIconInstagram></BIconInstagram>
        </a>
      </div>
      <div class="col-3">
        <a href="https://www.youtube.com/watch?v=mP07Oyr7enQ">
          <BIconYoutube></BIconYoutube>
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped>


</style>