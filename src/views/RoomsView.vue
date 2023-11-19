<script>
import RoomCard from "@/components/RoomCard.vue";
import { useRoomApiStore } from "../stores/roomApiStore";

import axios from 'axios'

export default {
  name: "RoomsView",
  components: { RoomCard },

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      rooms: [],
      roomApi: useRoomApiStore(),
    };
  },

  created() {
    this.getRooms();
  },

  computed: {
    rows() {
      return this.rooms.length;
    },
  },

  methods: {
    getRooms() {
      this.roomApi.getRooms();
      setTimeout(() => {
        this.rooms = this.roomApi.rooms;
      }, 500);
    },
  },
};
</script>

<template>
  <h2>Unsere Zimmer</h2>

  <div>
    <BRow >
      <BCol
          v-for="room in rooms.slice(
          (currentPage - 1) * perPage,
          (currentPage - 1) * perPage + perPage
        )"
          :key="room.id"
          class="d-flex justify-content-center"
      >
        <RoomCard :room="room" />
      </BCol>
    </BRow>

    <b-pagination
        class="mt-3"
        v-model="currentPage"
        :total-rows="this.rooms.length"
        :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<style scoped></style>