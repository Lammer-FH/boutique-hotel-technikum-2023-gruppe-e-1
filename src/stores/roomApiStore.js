import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useRoomApiStore = defineStore("roomApi", {
  state: () => ({
    rooms: [],
    room: null,
    getRoomsErrorCode: 200,
    isRoomAvailable: false,
    checkAvailabilityErrorCode: 200,
  }),

  actions: {
    fetchRoomDetails(roomId) {
      axios
        .get(apiUrl + "rooms/" + roomId)
        .then((response) => {
          this.$state.room = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getRooms() {
      axios
        .get(apiUrl + "rooms")
        .then((response) => {
          this.$state.rooms = response.data;
          this.$state.getRoomsErrorCode = response.status;
        })
        .catch((error) => {
          console.log(error);
          this.$state.getRoomsErrorCode = error.request.status;
        });
    },
    checkAvailability(roomId, dateFrom, dateTo) {
      axios
        .get(apiUrl + "room/" + roomId + "/from/" + dateFrom + "/to/" + dateTo)
        .then((response) => {
          this.$state.isRoomAvailable = response.data;
          this.$state.checkAvailabilityErrorCode = response.status;
        })
        .catch((error) => {
          console.log(error);
          this.$state.checkAvailabilityErrorCode = error.request.status;
        });
    },
  },
});
