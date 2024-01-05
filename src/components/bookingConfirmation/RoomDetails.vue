<script>
export default {
  name: "RoomDetails",
  props: ["bookingData"],
}
</script>

<template>
<p >ZimmerID: {{this.bookingData.selectedRoomId}}</p>
</template>

<style scoped>

</style>gi