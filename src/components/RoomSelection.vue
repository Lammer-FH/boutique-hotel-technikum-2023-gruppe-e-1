<script>
export default {
  name: "RoomSelection",
  props: ["dateFrom", "dateTo", "availableRooms"],
}

</script>

<template>
    <ul v-for="room in availableRooms">
        <li>{{ room.id }}</li>
    </ul>
</template>

<style scoped>

</style>