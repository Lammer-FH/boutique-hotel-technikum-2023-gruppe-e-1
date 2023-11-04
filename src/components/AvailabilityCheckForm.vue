<script>
import axios from "axios";

export default {
  name: "AvailabilityCheckForm",
  props: {},
  data() {
    return {
      dateFrom: "",
      dateTo: "",
      numberOfPersons: 2,
      rooms: [],
      availableRooms: [],
    };
  },
  created() {
    this.getRoomIds();
    // set todays date als default for arrival date
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, "0"); // Adjust for zero-based months
    let day = String(today.getDate()).padStart(2, "0");
    this.dateFrom = `${year}-${month}-${day}`;

    // set tomorrows date as default for departure date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    year = tomorrow.getFullYear();
    month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Adjust for zero-based months
    day = String(tomorrow.getDate()).padStart(2, "0");
    this.dateTo = `${year}-${month}-${day}`;

    // fetch all rooms
    
  },
  watch: {
    dateFrom(date) {
      this.checkAvailability();
    },
    dateTo(date) {
      this.checkAvailability();
    },
    numberOfPersons(number) {
      this.checkAvailability();
    },
  },
  computed: {
    minDateFrom() {
      // Calculate the minimum date, which is today's date
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Adjust for zero-based months
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    minDateTo() {
      // Calculate the minimum date, which is today's date
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const year = tomorrow.getFullYear();
      const month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Adjust for zero-based months
      const day = String(tomorrow.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
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
          console.log(this.rooms);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.checkAvailability();
        });
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
          if (data.available == true) {
            if (room.beds >= this.numberOfPersons) {
              this.availableRooms.push(room);
              console.log(this.availableRooms);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
    continueToRoomSelection() {
      this.$emit("checked-Availability", this.availableRooms);
    },
  },
};
</script>

<template>
  <div class="mb-3">
    <label for="date-from" class="form-label">Anreisedatum:</label>
    <input
      type="date"
      class="form-control"
      id="date-from"
      v-model="dateFrom"
      :min="minDateFrom"
    />
  </div>
  <div class="mb-3">
    <label for="date-to" class="form-label">Abreisedatum:</label>
    <input
      type="date"
      class="form-control"
      id="date-to"
      v-model="dateTo"
      :min="minDateTo"
    />
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
    <button
      type="submit"
      class="btn btn-primary"
      @click="continueToRoomSelection()"
    >
      Verfügbarkeit prüfen
    </button>
  </div>
</template>

<style scoped></style>
