<script>
import axios from "axios";

export default {
  name: "ConfirmBooking",

  props: ["personalData"],

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
      console.log(this.personalData.dateFrom)

      this.dateFrom = 2024 - 11 - 11;
      this.dateTo = 2024 - 11 - 11;
      this.roomId = 2;

      this.testDaten = {
        "firstname": "Franz",
        "lastname": "Xaver",
        "email": "franz@example.com",
        "birthdate": "1999-10-04"
      }


      axios
          .post("https://boutique-hotel.helmuth-lammer.at/api/v1/room/2/from/2026-11-10/to/2026-11-11", this.testDaten)
          .then((response) => { console.log(response) })
          .catch((error) => { console.error("There was an error", error) })
    },

  },
};
</script>

<template>
  <div class="mb-3">
    <label>Data:</label>
    <span>
      <p>{{ personalData.dateFrom }}</p>
    </span>
  </div>

  <div class="mb-3">
    <label>Name:</label>
    <span>
      <p>{{ personalData.firstName }} {{ personalData.lastName }}</p>
    </span>
  </div>

  <div class="mb-3">
    <label>eMail Adresse:</label>
    <span>
      <p>{{ personalData.emailAdress }}</p>
    </span>
  </div>

  <div class="mb-3">
    <label>Frühstück: </label>
    <span> {{ personalData.breakfast }} </span>
  </div>

  <div class="d-grid gap-2">
    <button type="submit" class="btn btn-primary" @click="book()">
      Zahlungspflichtig bestellen
    </button>
  </div>
</template>

<style scoped></style>
