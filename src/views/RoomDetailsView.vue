<script>

import axios from "axios";

export default {
  name: "RoomDetailsView",

  data() {
    return {
      room: null
    }
  },

  created() {
    this.fetchRoomDetails();
  },

  methods: {
    fetchRoomDetails() {
      this.roomId = this.$route.params.roomId
      console.log(this.roomId)

      axios.get(`https://boutique-hotel.helmuth-lammer.at/api/v1/rooms/${this.roomId}`)
          .then(response => {
            this.room = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
}

</script>

<template>
  <div v-if="room">
  <h2>{{ room.roomName }}</h2>

  </div>

</template>

<style scoped>

</style>