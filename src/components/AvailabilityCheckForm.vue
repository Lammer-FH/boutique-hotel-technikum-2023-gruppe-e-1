<script>
import axios from "axios";

export default {
  name: "AvailabilityCheckForm",
  props: {},
  data() {
    return {
      dateFrom: "2023-12-01",
      dateTo: "2023-12-12",
      numberOfPersons: 2,
      rooms: [],
      availableRooms: [],
    };
  },
  beforeMount() {
    this.getRoomIds();
  },
  methods: {
    getRoomIds() {
      axios
        .get("https://boutique-hotel.helmuth-lammer.at/api/v1/rooms")
        .then((response) => {
          let data = response.data;
          data.forEach((room) => {
            this.rooms.push(room);
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {});
    },
    checkAvailability() {
      this.rooms.forEach((room) => {
        this.checkAvailabilityForRoom(room);
      });
    },
    checkAvailabilityForRoom(room) {
      axios
        .get(
          "https://boutique-hotel.helmuth-lammer.at/api/v1/room/" +
            room.id +
            "/from/" +
            this.dateFrom +
            "/to/" +
            this.dateTo
        )
        .then((response) => {
          let data = response.data;
          if(data.available == true){
            this.availableRooms.push(room);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          
        });
    },
  },
};
</script>

<template>
  <div class="mb-3">
    <label for="date-from" class="form-label">Anreisedatum:</label>
    <input type="date" class="form-control" id="date-from" v-model="dateFrom" />
  </div>
  <div class="mb-3">
    <label for="date-to" class="form-label">Abreisedatum:</label>
    <input type="date" class="form-control" id="date-to" v-model="dateTo" />
  </div>
  <div class="mb-3">
    <label for="number-of-persons" class="form-label"
      >Anzahl der Personen:</label
    >
    <input
      type="number"
      class="form-control"
      id="number-of-persons"
      v-model="numberOfPersons"
    />
  </div>
  <div class="d-grid gap-2">
    <button type="submit" class="btn btn-primary" @click="checkAvailability()">
      Verfügbarkeit prüfen
    </button>
  </div>
</template>

<style scoped></style>
