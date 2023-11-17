import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useRoomApiStore = defineStore("roomApi", {
  state: () => ({
    rooms: [],
    hasRoomsError: false,
    roomsError: "",
  }),

  actions: {
    getRooms() {
      axios
        .get(apiUrl + "rooms")
        .then((response) => {
          this.$state.rooms = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.$state.hasRoomsError = true;
        });
    },
  },
});
