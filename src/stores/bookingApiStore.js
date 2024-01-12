import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useBookingApiStore = defineStore("bookingApi", {
  state: () => ({
    bookingID: 0,
    confirmBooking: false,
    rooms: [],
    hasRoomsError: false,
    roomsError: "",
    userData: null
  }),

  actions: {
    getUserWithBookings() {
      return axios.get(
        apiUrl + "user"
      )
      .then((response) => {
        this.$state.userData = response.data
      })
      .catch((error) => {
        console.log(error)
      });
    },
    postApi(bookingData) {
      let data = {
        firstname: bookingData.firstName,
        lastname: bookingData.lastName,
        email: bookingData.emailAdress,
        birthdate: bookingData.birthday,
      };
      return axios
        .post(
          apiUrl +
            "room/" +
            bookingData.selectedRoomId +
            "/from/" +
            bookingData.dateFrom +
            "/to/" +
            bookingData.dateTo,
          data
        )
        .then((response) => {
          this.$state.confirmBooking = true;
          this.$state.bookingID = response.data.id;
        })
        .catch((error) => {
          console.error("Error Post Booking");
          this.$state.confirmBooking = false;
          this.$state.bookingID = 0;
        });
    },
  },
});
