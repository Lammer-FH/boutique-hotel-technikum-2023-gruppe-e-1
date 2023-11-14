<script>
import RoomCard from "@/components/RoomCard.vue";

import axios from 'axios'

export default {
  name: "RoomsView",
  components: {RoomCard},

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      rooms: []
    }
  },

  created() {
    this.getRooms();

  },

  computed: {
    rows() {
      return this.rooms.length
    }
   },

  methods: {
    getRooms() {
      axios.get("https://boutique-hotel.helmuth-lammer.at/api/v1/rooms")
          .then(response => {
            let data = response.data
            data.forEach((room) => {
              this.rooms.push(room);
            })
          })
          .catch(error => {
            // handle error
            console.log(error)
          })
          .then(() => {
            // always executed
          });
    }
  }
}
</script>

<template>
  <h2>Unsere Zimmer</h2>
  <div class="rows" id="roomCards"
       :items="rooms.id"
       :per-page="perPage"
       :current-page="currentPage"
       small
  >
  <RoomCard v-for="room in rooms"  :room=room />
  </div>
  <div class="overflow-auto">
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="roomCards"
    ></b-pagination>
  </div>
 </template>

<style scoped>

</style>