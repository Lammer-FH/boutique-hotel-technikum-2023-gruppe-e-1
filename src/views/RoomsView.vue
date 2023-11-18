<script>
import RoomCard from "@/components/RoomCard.vue";
import { useRoomApiStore } from "../stores/roomApiStore";

export default {
  name: "RoomsView",
  components: {RoomCard},

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      rooms: [],
      roomApi: useRoomApiStore(),
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
      this.roomApi.getRooms();
      setTimeout(() => {
        this.rooms = this.roomApi.rooms;
      }, 500);
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
  <RoomCard v-for="room in rooms" :key="room.id" :room=room />
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