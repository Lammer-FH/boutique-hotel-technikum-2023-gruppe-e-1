<script>
export default {
  name: "RoomSelection",
  props: ["data"],
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

    <div class="form-check pt-3" v-for="room in this.data.availableRooms" v-if="this.data.availableRooms.length > 0">
      <input
        class="form-check-input"
        type="radio"
        name="roomSelectRadio"
        :id="'room' + room.id"
      />
      <label class="form-check-label" :for="'room' + room.id">
        {{ room.roomsName }}, {{ room.pricePerNight }} €
      </label>
    </div>
    <div v-else class="mt-3 ms-3 text-danger">
      Keine Zimmer im angegebenen Zeitraum verfügbar
    </div>
  </BContainer>
</template>

<style scoped>
</style>
