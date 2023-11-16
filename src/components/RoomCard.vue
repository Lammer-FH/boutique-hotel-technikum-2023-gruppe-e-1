<script>
import {ref} from "vue";

export default {
  name: "RoomCard",
  props: ["room"],

  data() {
    return {
      imageSources: [
        `src/assets/images/rooms/${this.room.id}.jpg`,

      ],
      currentImageIndex: ref(0)
    }
  },

  computed: {
    imagePath() {
      return this.imageSources[this.currentImageIndex];
    }
  },
}
</script>

<template>

  <!-- klassisches Bootstrap verwendet, weil mit der Bootstrap-Vue Card das Bild nicht angezeigt wurde -->

  <RouterLink :to="'/roomDetails/' + room.id">
    <div class="card" style="width: 18rem;">
      <img :src=imagePath class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ this.room.roomsName }}</h5>
        <p class="card-text"> aktueller Preis pro Nacht in Euro: <b>{{ this.room.pricePerNight }} </b></p>
      </div>
    </div>

  </RouterLink>

</template>

<style scoped>

</style>