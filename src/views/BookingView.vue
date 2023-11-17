<script>
import AvailabilityCheckForm from "../components/booking/AvailabilityCheckForm.vue";
import RoomSelection from "../components/booking/RoomSelection.vue";
import PersonalDataInputForm from "@/components/booking/PersonalDataInputForm.vue";
import ConfirmBooking from "@/components/booking/ConfirmBooking.vue";

export default {
  name: "BookingView",
  components: {AvailabilityCheckForm, RoomSelection, PersonalDataInputForm, ConfirmBooking},
  props: {},
  data() {
    return {
      dateFrom: "",
      dateTo: "",
      numberOfPersons: 2,
      availableRooms: [],
      selectedRoomId: null,
      isValidAvailabilityCheck: false,
      isValidRoomSelection: false,
      firstName: "",
      lastName: "",
      emailAdress: "",
      emailAdressConfirm: "",
      breakfast: "",
      birthday: ""
    };
  },



  methods: {
    /*
      set the data received from AvailableCheckForm 
      and open the accordions RoomSelection item
    */
    handleAvailabilityData(data) {
      this.dateFrom = data.dateFrom;
      this.dateTo = data.dateTo;
      this.numberOfPersons = data.numberOfPersons;
      this.availableRooms = data.availableRooms;
      console.log(this.isValidAvailabilityCheck)
      this.isValidAvailabilityCheck = data.isValidAvailabilityCheck;
      console.log(this.isValidAvailabilityCheck)
      this.$nextTick(() => {
        this.$refs.RoomSelectionButton.click();
      });
    },
    /*
      set the data received from RoomSelection 
      and open the accordions next item
    */
    handleRoomSelectionData(data) {
      this.selectedRoomId = data.selectedRoomId;
      this.isValidRoomSelection = data.isValidRoomSelection;
      this.$nextTick(() => {
        this.$refs.contactDataFormButton.click();
      });
    },

    /*
      create a data object which will be passed to the RoomSelection component 
    */
    sendDataToRoomSelection() {
      let data = {
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        numberOfPersons: this.numberOfPersons,
        availableRooms: this.availableRooms,
      };
      return data;
    },

    /*
      set the data received from PersonalDataInputForm
      and open the accordions next item
    */
    handlePersonalData(personalData) {
      this.firstName = personalData.firstName;
      this.lastName = personalData.lastName;
      this.emailAdress = personalData.emailAdress;
      this.emailAdressConfirm = personalData.emailAdressConfirm;
      this.breakfast = personalData.breakfast;
      this.birthday = personalData.birthday;
      this.$nextTick(() => {
        this.$refs.confirmBookingButton.click();
      });

    },

  },


  computed: {
    isValidAvailabilityForm(){
      return this.isValidAvailabilityCheck;
    },
    /*
      check if there is a room selected
    */
    isValidRoomSelectionForm() {
      return this.isValidRoomSelection;
    },

    /*
     create a data object which will be passed to the ConfirmBooking component
   */
    sendDataToConfirmBooking() {
      let bookingData = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdress: this.emailAdress,
        emailAdressConfirm: this.emailAdressConfirm,
        breakfast: this.breakfast,
        birthday: this.birthday,
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        selectedRoomId: this.selectedRoomId,
        numberOfPersons: this.numberOfPersons,
      };
      return bookingData;
    },


  },
};
</script>

<template>
  <!-- 
    use bootstrap accordion instead of bootstrap-vue-next 
    because buttons cannot be styled in bootstrap-vue-next
  -->
  <div class="accordion" id="booking-accordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseAvailabilityCheck"
            aria-expanded="false"
            aria-controls="collapseAvailabilityCheck"
        >
          1. Verfügbarkeit prüfen
        </button>
      </h2>
      <div
          id="collapseAvailabilityCheck"
          class="accordion-collapse collapse show"
          data-bs-parent="#booking-accordion"
      >
        <div class="accordion-body">
          <AvailabilityCheckForm
              @checked-availability="handleAvailabilityData"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
            ref="RoomSelectionButton"
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseRoomSelection"
            aria-expanded="false"
            aria-controls="collapseRoomSelection"
            :disabled="!isValidAvailabilityForm"
        >
          2. Zimmer auswählen
        </button>
      </h2>
      <div
          id="collapseRoomSelection"
          class="accordion-collapse collapse"
          data-bs-parent="#booking-accordion"
      >
        <div class="accordion-body">
          <RoomSelection
              :data="sendDataToRoomSelection()"
              @selected-room="handleRoomSelectionData"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
            ref="contactDataFormButton"
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseContactData"
            aria-expanded="false"
            aria-controls="collapseContactData"
            :disabled="!isValidRoomSelectionForm"
        >
          3. Kontaktdaten eingeben
        </button>
      </h2>
      <div
          id="collapseContactData"
          class="accordion-collapse collapse"
          data-bs-parent="#booking-accordion"
      >
        <div class="accordion-body">
          <PersonalDataInputForm @personalData="handlePersonalData"/>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
            ref="confirmBookingButton"
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFinishBooking"
            aria-expanded="false"
            aria-controls="collapseFinishBooking"
        >
          4. Buchung abschließen
        </button>
      </h2>
      <div
          id="collapseFinishBooking"
          class="accordion-collapse collapse"
          data-bs-parent="#booking-accordion"
      >
        <div class="accordion-body">
          <ConfirmBooking
              :booking-data="sendDataToConfirmBooking"

          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: #f8f9fa;
}
</style>
