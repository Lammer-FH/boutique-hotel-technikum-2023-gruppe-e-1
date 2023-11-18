import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useRoomApiStore = defineStore("roomApi", {
  state: () => ({
    rooms: [],
    room: null,
    hasRoomsError: false,
    roomsError: "",
  }),

  actions: {
    fetchRoomDetails(roomId){
      axios.get(apiUrl + "rooms/" + roomId)
            .then(response => {
              this.$state.room = response.data;
            })
            .catch(error => {
              console.error(error);
            });
    },
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
