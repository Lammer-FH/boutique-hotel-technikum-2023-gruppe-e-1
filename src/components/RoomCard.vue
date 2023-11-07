<script>
export default {
  name: "RoomCard",
  props: ["id", "roomName", "price"],
}

</script>

<template>

  <!-- klassisches Bootstrap verwendet, weil mit der Bootstrap-Vue Card das Bild nicht angezeigt wurde -->
  <div class="card" style="width: 18rem;">
    <img src="../assets/images/rooms/1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{this.roomName}}</h5>
      <p class="card-text"> aktueller Preis: <b>{{ price }}</b></p>
    </div>
  </div>

</template>

<style scoped>

</style>