<script>
export default {
  name: "RoomCard",
  props: ["room"],

}
</script>

<template>

  <!-- klassisches Bootstrap verwendet, weil mit der Bootstrap-Vue Card das Bild nicht angezeigt wurde -->

  <RouterLink :to="'/roomDetails/' + this.room.id">
    <div class="card" style="width: 18rem;">
      <img src="../assets/images/rooms/1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ this.room.roomsName }}</h5>
        <p class="card-text"> aktueller Preis: <b>{{ this.room.pricePerNight }}</b></p>
      </div>
    </div>
  </RouterLink>

</template>

<style scoped>

</style>