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
      firstName: "",
      lastName: "",
      emailAdress: "",
      emailAdressConfirm: "",
      breakfast: true,
      testDaten: []
    };
  },

  methods: {
    book() {
      //ToDo
      // buchungsid übernehmen

/*
      axios
          .post("https://boutique-hotel.helmuth-lammer.at/api/v1/room/2/from/2026-11-10/to/2026-11-11", )
          .then((response) => { console.log(response) })
          .catch((error) => { console.error("There was an error", error) })

 */
      console.log("Booking Button gedrückt")
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

