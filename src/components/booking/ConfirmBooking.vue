<script>
import { useBookingApiStore } from "@/stores/bookingApiStore";
import ConfirmationModal from "../bookingConfirmation/ConfirmationModal.vue";
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
        message: "",
        details: "",
        bookingOk: true
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
               this.modalData.title = "Buchungsbestätigung";
               this.modalData.message = "Buchung erfolgreich durchgeführt. Ihre Buchungs ID: " + this.bookingApi.bookingID;
               this.modalData.details = this.bookingData;
               this.isModalHidden = false;
             } else {
               this.modalData.title = "Buchung fehlgeschlagen";
               this.modalData.message = "Bitte Buchung erneut durchführen.";
               this.modalData.details = " ";
               this.modalData.bookingOk = false;
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
