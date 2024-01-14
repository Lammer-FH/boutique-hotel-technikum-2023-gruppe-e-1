<script>
import { useBookingApiStore } from "@/stores/bookingApiStore";
import { bookingDataStore } from "@/stores/bookingDataStore";
import ConfirmationModal from "../bookingConfirmation/BookingFailModal.vue";
import PersonalData from "@/components/booking/PersonalData.vue";

// component to show all booking information, when confirmed try to post booking data to the backend
export default {
  name: "ConfirmBooking",
  // Data from the Parent
  props: ["bookingData"],
  data() {
    return {
      // access bookingApiStore
      bookingApi: useBookingApiStore(),
      bookingDataStore: bookingDataStore(),
      modalData: {
        title: "",
        message: ""
      },
      isModalHidden: true,
    };
  },
  methods: {
    // call the postAPi from the bookingApiStore, when successful show the bookingconfirmation view
     book() {
       this.bookingApi.postApi(this.bookingData)
           .then( () => {
             if (this.bookingApi.confirmBooking) {
               this.bookingDataStore.setBookingData(this.bookingData);
               this.$router.push({path: "/booking_confirmation/"  });
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
