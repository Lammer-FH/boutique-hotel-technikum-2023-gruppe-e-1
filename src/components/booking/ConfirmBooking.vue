<script>
import axios from "axios";

export default {
  name: "ConfirmBooking",

  props: ["bookingData"],

  data() {
    return {
      dateFrom: "",
      dateTo: "",
      numberOfPersons: 2,
      availableRooms: [],
      selectedRoomId: null,
      isValidRoomSelection: false,
      firstName: "",
      lastName: "",
      emailAdress: "",
      emailAdressConfirm: "",
      breakfast: "",
      birthday: "",
      bookingID: "",
    };
  },

  methods: {
    book() {

      let data = {
        "firstname": this.bookingData.firstName,
        "lastname": this.bookingData.lastName,
        "email": this.bookingData.emailAdress,
        "birthdate": this.bookingData.birthday,
      }

      axios
          .post("https://boutique-hotel.helmuth-lammer.at/api/v1/room/"
              + this.bookingData.selectedRoomId + "/from/"
              + this.bookingData.dateFrom + "/to/"
              + this.bookingData.dateTo, data)
          .then((response) => {
            this.bookingID = response.data.id
            this.$refs['confirm-booking'].show()
          })
          .catch((error) => {
            console.error("There was an error", error)
            this.$refs['failed-booking'].show()
          })
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
      <p class="my-4">Ihre Buchungs ID: {{ this.bookingID }}</p>
    </b-modal>
  </div>

  <div>
    <b-modal ref="failed-booking" id="modal-1" title="Buchung fehlgeschlagen">
      <p class="my-4">Bitte Buchung erneut durchführen.</p>
    </b-modal>
  </div>
</template>

<style scoped></style>

