<script>
import RoomCard from "@/components/RoomCard.vue";

export default {
  name: "RoomsView",
  components: {RoomCard},
  data() {
    return {
      rooms: [
        {
          roomName: "Zimmer klein", description: "Beschreibung für Zimmer klein"
        },
        {
          roomName: "Zimmer groß", description: "Beschreibung für Zimmer groß"
        },
        {
          roomName: "Suit", description: "Beschreibung für Suit"
        },
      ]
    }
  }
}
</script>

<template>
<h1>Unsere Zimmer</h1>

  <RoomCard v-for="room in rooms" roomName="Test" :description=room.description />
</template>

<style scoped>

</style>