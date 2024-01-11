import { defineStore } from "pinia";
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
