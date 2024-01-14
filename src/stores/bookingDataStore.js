import { defineStore } from "pinia";

// Store for providing the booking details to the booking confirmation page
export const bookingDataStore = defineStore("bookingData", {
    state: () => ({
        bookingData: null
    }),

    actions: {
        setBookingData(bookingData) {
                this.bookingData= bookingData
             },
    },
});
