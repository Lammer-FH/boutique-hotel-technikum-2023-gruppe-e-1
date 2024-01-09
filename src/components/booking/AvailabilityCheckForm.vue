<script>

import { useRoomApiStore } from "../../stores/roomApiStore";
import ConfirmationModal from "../bookingConfirmation/BookingFailModal.vue";

export default {
  name: "AvailabilityCheckForm",
  props: {},
  components: { ConfirmationModal },
  emits: ["data"],
  data() {
    return {
      dateFrom: "",
      dateTo: "",
      numberOfPersons: 2,
      rooms: [],
      availableRooms: [],
      isValidNumberOfPersons: true,
      isValidDateInput: true,
      isValidForm: true,
      roomApi: useRoomApiStore(),
      hasErrorGettingRooms: false,
      apiError: {
        title: "",
        message: "",
      },
      isModalHidden: true,
    };
  },
  created() {
    // fetch all rooms
    //this.getRoomIds();
    // set todays date als default for arrival date
    let today = new Date();
    this.dateFrom = this.dateToString(today);
    // set tomorrows date as default for departure date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.dateTo = this.dateToString(tomorrow);
  },
  watch: {
    // validate arrival date
    dateFrom(newDateFromAsString) {
      if (Date.parse(newDateFromAsString) > Date.parse(this.dateTo)) {
        this.isValidDateInput = false;
      } else {
        this.isValidDateInput = true;
      }
      this.validateForm();
    },
    // validate departure date
    dateTo(newDateToAsString) {
      if (Date.parse(newDateToAsString) < Date.parse(this.dateFrom)) {
        this.isValidDateInput = false;
      } else {
        this.isValidDateInput = true;
      }
      this.validateForm();
    },
    // numberOfPersons is infalid if user input < 1
    numberOfPersons(newNumberOfPersons) {
      this.isValidNumberOfPersons = newNumberOfPersons > 1;
      this.validateForm();
    },
  },
  computed: {
    // get todays date
    minDateFrom() {
      const today = new Date();
      return this.dateToString(today);
    },
    // get tomorrows date
    minDateTo() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return this.dateToString(tomorrow);
    },
  },
  methods: {
    /*
          check if all user inputs are valid
        */
    validateForm() {
      this.isValidForm = true;
      if (!this.isValidDateInput) {
        this.isValidForm = false;
      }
      if (!this.isValidNumberOfPersons) {
        this.isValidForm = false;
      }
    },
    // convert date to string
    dateToString(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Adjust for zero-based months
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    /*
          reset the availableRooms array to empty,
          iterate through the rooms array
          for every room check its availability
        */
    checkAvailability() {
      this.availableRooms = [];
      this.rooms.forEach((room) => {
        this.checkAvailabilityForRoom(room);
      });
    },
    /*
          make request to with a rooms id, the arrival date and the departure date.
          if the room is available and the number of beds is greater than the number of persons,
          push the room to the availableRooms array
        */
    checkAvailabilityForRoom(room) {
      this.roomApi.checkAvailability(room.id, this.dateFrom, this.dateTo).then(() => {
        if (this.roomApi.checkAvailabilityErrorCode != 200) {
          this.apiError.title = "Fehler bei der Abftrage: Verfügbarkeit";
          this.apiError.message =
            "Bei der Abfrage der Verfügbarkeit ist ein Fehler aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut. (Error " +
            this.roomApi.checkAvailabilityErrorCode +
            ")";
            this.isModalHidden = false;
        } else {
          if (this.roomApi.isRoomAvailable) {
            this.checkRoomAvailabilityDependingOnNumberOfPersons(room);
          }
        }
      });
      setTimeout(() => {
        
      }, 500);
    },
    /*
          check if a room has enough beds for all the selected number of persons
        */
    checkRoomAvailabilityDependingOnNumberOfPersons(room) {
      if (room.beds >= this.numberOfPersons) {
        this.availableRooms.push(room);
      }
    },
    /*
          get all Rooms from api and check for error
          if there is a error show a Message
          if not check the availability for each room
          prepare data and send it to the BookingView
        */
    async continueToRoomSelection() {
      this.roomApi.getRooms().then(() => {
        if (this.roomApi.getRoomsErrorCode != 200) {
          this.apiError.title = "Fehler bei der Abftrage: Zimmer";
          this.apiError.message =
            "Bei der Abfrage der Zimmer ist ein Fehler aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut. (Error " +
            this.roomApi.getRoomsErrorCode +
            ")";
          this.isModalHidden = false;
        } else {
          const rooms = this.roomApi.rooms;
          this.availableRooms = [];
          rooms.forEach((room) => {
            this.checkAvailabilityForRoom(room);
          });
          this.sendDataToBookingView();
        }
      });
    },
    sendDataToBookingView() {
      const data = {
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        numberOfPersons: this.numberOfPersons,
        availableRooms: this.availableRooms,
        isValidAvailabilityCheck: this.isValidNumberOfPersons,
      };
      this.$emit("checked-availability", data);
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
    <span class="text-danger" v-if="!isValidDateInput">
      Das Anreisedatum darf nicht nach dem Abreisedatum liegen
    </span>
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
    <span class="text-danger" v-if="!isValidDateInput">
      Das Abreisedatum darf nicht vor dem Anreisedatum liegen
    </span>
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
      min="1"
    />
    <span class="text-danger" v-if="!isValidNumberOfPersons">
      Die Anzahl der Personen darf nicht kleiner as 1 sein.
    </span>
  </div>
  <div class="d-grid gap-2">
    <button
      type="submit"
      class="btn btn-primary"
      @click="continueToRoomSelection()"
      :disabled="!isValidForm"
    >
      Verfügbarkeit prüfen
    </button>
  </div>

  <div>
    <ConfirmationModal
      :modalData="this.apiError"
      :isHidden="isModalHidden"
    />
  </div>
</template>

<style scoped></style>
