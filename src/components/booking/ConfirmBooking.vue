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
      breakfast: true,
    };
  },

  methods: {
    book() {
      //ToDo
      // buchungsid übernehmen
      // birthdate
      // confirmation modal
      // stores axios


      let data = {
        "firstname": this.bookingData.firstName,
        "lastname": this.bookingData.lastName,
        "email": this.bookingData.emailAdress,
        "birthdate": "2000-10-10"
      }

      axios
          .post("https://boutique-hotel.helmuth-lammer.at/api/v1/room/"
              + this.bookingData.selectedRoomId +"/from/"
              + this.bookingData.dateFrom + "/to/"
              + this.bookingData.dateTo , data)
          .then((response) => { console.log(response.data.id) })
          .catch((error) => { console.error("There was an error", error) })

    },

  },
};

//ToDo
// Frühstück ja nein
// modal nach buchung

</script>

<template>

    <BContainer fluid class="pb-3 border-bottom">
      <BRow>
        <BCol> gewählter Zeitraum: </BCol>
        <BCol> {{ bookingData.dateFrom }} - {{ bookingData.dateTo }} </BCol>
      </BRow>
      <BRow>
        <BCol> Anzahl der Personen:</BCol>
        <BCol> {{ bookingData.numberOfPersons }} </BCol>
      </BRow>
      <BRow>
        <BCol> Name:</BCol>
        <BCol> {{ bookingData.firstName }} {{ bookingData.lastName }} </BCol>
      </BRow>
      <BRow>
        <BCol> eMail Adresse:</BCol>
        <BCol> {{ bookingData.emailAdress }} </BCol>
      </BRow>
      <BRow>
        <BCol> Frühstück:</BCol>
        <BCol> {{ bookingData.breakfast }} </BCol>
      </BRow>
    </BContainer>

  <div class="d-grid gap-2">
    <button type="submit" class="btn btn-primary" @click="book()">
      Zahlungspflichtig bestellen
    </button>
  </div>
</template>

<style scoped></style>

