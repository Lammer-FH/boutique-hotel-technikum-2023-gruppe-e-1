<script>
export default {
  name: "RoomSelection",
  props: ["data"],
  data() {
    return {
      selectedRoomId: null,
      isValid: false,
    };
  },

  methods: {
    /*
      set selectedRoomId if radio button selection changes
    */
    onRoomChange(event) {
      this.selectedRoomId = event.target.value;
    },
    /*
      create a data object which will be passed to the parent component
      with the checked-availability emitter
    */
    continueToPersonalDataInput() {
      const data = {
        selectedRoomId: this.selectedRoomId,
        isValidRoomSelection: this.isFormValid,
      }
      this.$emit("selected-room", data);
    },
  },

  computed: {
    /*
      Check if there is a Room selected
    */
    isFormValid() {
      return this.selectedRoomId !== null && this.selectedRoomId !== undefined;
    },
  },
};
</script>

<template>
  <BContainer fluid>
    <BContainer fluid class="pb-3 border-bottom">
      <BRow>
        <BCol> gewählter Zeitraum: </BCol>
        <BCol> {{ this.data.dateFrom }} - {{ this.data.dateTo }} </BCol>
      </BRow>
      <BRow>
        <BCol> Anzahl der Personen:</BCol>
        <BCol> {{ this.data.numberOfPersons }} </BCol>
      </BRow>
    </BContainer>

    <form role="form" data-toggle="validator" @submit.prevent>
      <div
        class="form-check pt-3 pb-3"
        v-for="room in this.data.availableRooms"
        v-if="this.data.availableRooms.length > 0"
      >
        <div class="form-group">
          <input
            class="form-check-input"
            type="radio"
            name="roomSelectRadio"
            :id="'room' + room.id"
            :value="room.id"
            @change="onRoomChange($event)"
            required
          />
          <label class="form-check-label" :for="'room' + room.id">
            {{ room.roomsName }}, {{ room.pricePerNight }} €
          </label>
        </div>
      </div>
      <div v-else class="mt-3 ms-3 text-danger">
        Keine Zimmer im angegebenen Zeitraum verfügbar
      </div>
      <div class="d-grid gap-2">
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="!isFormValid"
          @click="continueToPersonalDataInput()"
        >
          Zimmer auswählen
        </button>
      </div>
    </form>
  </BContainer>
</template>

<style scoped></style>
