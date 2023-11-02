<script>
import RoomCard from "@/components/RoomCard.vue";

export default {
  name: "RoomsView",
  components: {RoomCard},
  data() {
    return {
      rooms: [
        {
          roomName: "Zimmer klein", price: "100 €", imagePath: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          roomName: "Zimmer groß", price: "150 €", imagePath: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          roomName: "Suit", price: "250 €", imagePath: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
      ]
    }
  }
}
</script>

<template>
<h2>Unsere Zimmer</h2>

<BContainer>
  <BRow>
    <BCol v-for="room in rooms">
      <RoomCard :roomName=room.roomName :price=room.price :imagePath=room.imagePath />
    </BCol>
  </BRow>
</BContainer>
  
</template>

<style scoped>

</style>