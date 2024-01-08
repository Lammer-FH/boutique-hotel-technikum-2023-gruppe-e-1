<script>
import { useBookingApiStore } from "@/stores/bookingApiStore";
import ConfirmationModal from "../bookingConfirmation/BookingFailModal.vue";
import PersonalData from "@/components/booking/PersonalData.vue";

export default {
  name: "ConfirmBooking",
  // Data from the Parent
  props: ["bookingData"],
  data() {
    return {
      // access bookingApiStore
      bookingApi: useBookingApiStore(),
      modalData: {
        title: "",
        message: ""
      },
      isModalHidden: true,
    };
  },
  methods: {
    // call the Api in the store with the booking Data
     book() {
       this.bookingApi.postApi(this.bookingData)
           .then( () => {
             if (this.bookingApi.confirmBooking) {
               // neue seite als buchungsbestätigung mit druckoption
               this.$router.push({path: "/booking_confirmation/" + JSON.stringify(this.bookingData) });
             } else {
               this.modalData.title = "Buchung fehlgeschlagen";
               this.modalData.message = "Bitte Buchung erneut durchführen.";
               this.isModalHidden = false;
             }
           });
    },
  },
  components: { ConfirmationModal, PersonalData },
};
</script>

<template>

  <PersonalData :personalData="this.bookingData" />

  <div class="d-grid gap-2">
      <button type="submit" class="btn btn-primary" @click="book()">
        Zahlungspflichtig bestellen
      </button>
    </div>

    <div>
      <ConfirmationModal :modalData="this.modalData" :isHidden="isModalHidden" />
    </div>
  </template>

  <style scoped></style>
