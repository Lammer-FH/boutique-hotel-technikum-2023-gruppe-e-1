<script>

import {useBookingApiStore} from "@/stores/bookingApiStore";

export default {
  name: "ConfirmBooking",

  // Data from the Parent
  props: ["bookingData"],

  data() {
    return {
      // access bookingApiStore
      bookingApi: useBookingApiStore(),
    };
  },

  methods: {
    // call the Api in the store with the booking Data
    book() {
      this.bookingApi.postApi(this.bookingData)

      // Timeout to garuantee the data from the post request are ready
      setTimeout(() => {
        if (this.bookingApi.confirmBooking) {
          this.$refs['confirm-booking'].show();
        } else {
          this.$refs['failed-booking'].show();
        }
      }, 500);
    },
  },
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
    <b-modal ref="confirm-booking" id="modal-1" title="Buchungsbestätigung">
      <p class="my-4">Buchung erfolgreich durchgeführt.</p>
      <p class="my-4">Ihre Buchungs ID: {{ this.bookingApi.bookingID }}</p>
    </b-modal>
  </div>

  <div>
    <b-modal ref="failed-booking" id="modal-1" title="Buchung fehlgeschlagen">
      <p class="my-4">Bitte Buchung erneut durchführen.</p>
    </b-modal>
  </div>
</template>

<style scoped></style>

