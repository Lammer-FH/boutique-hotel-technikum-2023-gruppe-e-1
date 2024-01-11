<script>
import RoomDetails from "@/components/RoomDetails.vue";

export default {
  name: "RoomDetailsView",
  components: { RoomDetails},

  data() {
    return {
      roomId: null,
      imageSources: [],
    }
  },


  created() {
    this.roomId = this.$route.params.roomId;
  },

  methods: {
    goBack() {
      this.$router.push('/rooms');
    },
    goToBooking() {
      this.$router.push('/booking');
    }
  }
}

</script>

<template>

  <div v-if="roomId">
  <RoomDetails :roomId="roomId"/>

    <!-- buttons -->

    <b-row class="my-3">
      <b-col d="6" sm="12">
        <b-button variant="primary" @click="goBack" class="w-100">Zurück zur Zimmerübersicht</b-button>
      </b-col>

      <br>

      <b-col d="6" sm="12">
        <b-button variant="success" @click="goToBooking" class="w-100">Verfügbarkeit prüfen</b-button>
      </b-col>
    </b-row>
  </div>

  <div v-else class="text-center">
    Die Zimmerdetails werden gerade geladen.
  </div>

</template>

<style scoped>

</style>

