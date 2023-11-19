<script>
import { useBookingApiStore } from "@/stores/bookingApiStore";
import ConfirmationModal from "../ConfirmationModal.vue";

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
      },
      isModalHidden: true,
    };
  },
  methods: {
    // call the Api in the store with the booking Data
    book() {
      this.bookingApi.postApi(this.bookingData);
      // Timeout to garuantee the data from the post request are ready
      setTimeout(() => {
        if (this.bookingApi.confirmBooking) {
          this.modalData.title = "Buchungsbestätigung";
          this.modalData.message = "Buchung erfolgreich durchgeführt. Ihre Buchungs ID: " + this.bookingApi.bookingID;
          this.isModalHidden = false;
        } else {
          this.modalData.title = "Buchung fehlgeschlagen";
          this.modalData.message = "Bitte Buchung erneut durchführen.";
          this.isModalHidden = false;
        }
      }, 500);
    },
  },
  components: { ConfirmationModal },
};
</script>

<template>
  <BContainer fluid class="pb-3 border-bottom">
    <BRow>
      <BCol> gewählter Zeitraum:</BCol>
      <BCol> {{ bookingData.dateFrom }} - {{ bookingData.dateTo }}</BCol>
    </BRow>
    <BRow>
      <BCol> Anzahl der Personen:</BCol>
      <BCol> {{ bookingData.numberOfPersons }}</BCol>
    </BRow>
    <BRow>
      <BCol> Name:</BCol>
      <BCol> {{ bookingData.firstName }} {{ bookingData.lastName }}</BCol>
    </BRow>
    <BRow>
      <BCol> Geburtsdatum:</BCol>
      <BCol> {{ bookingData.birthday }}</BCol>
    </BRow>
    <BRow>
      <BCol> eMail Adresse:</BCol>
      <BCol> {{ bookingData.emailAdress }}</BCol>
    </BRow>
    <BRow>
      <BCol> Frühstück:</BCol>
      <BCol> {{ bookingData.breakfast }}</BCol>
    </BRow>
  </BContainer>

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
