<script>
import AvailabilityCheckForm from "../components/AvailabilityCheckForm.vue";
import RoomSelection from "../components/RoomSelection.vue";

export default {
  name: "BookingView",
  components: { AvailabilityCheckForm, RoomSelection },
  props: {},
  data() {
    return {
      selectedDateFrom: '',
      selectedDateTo: '',
      availableRooms: [],
    };
  },

  methods: {
    /*
      set the data received from AvailableCheckForm 
      and open the accordions RoomSelection item
    */
    handleAvailabilityData(data) {
      this.selectedDateFrom = data.dateFrom;
      this.selectedDateTo = data.dateTo;
      this.availableRooms = data.availableRooms;
      this.$nextTick(() => {
        this.$refs.RoomSelectionButton.click();
      });
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
          <AvailabilityCheckForm @checked-availability="handleAvailabilityData" />

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
          <RoomSelection :dateFrom=selectedDateFrom :dateTo=selectedDateTo :availableRooms=availableRooms />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseContactData"
          aria-expanded="false"
          aria-controls="collapseContactData"
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
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
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
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
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
