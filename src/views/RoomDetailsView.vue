<script>

export default {
  name: "RoomDetailsView",

  data() {
    return {
      roomId: 1
    }
  },

  created() {
    this.roomId = this.$route.params.roomId
    console.log(this.roomId)
  }

}

</script>

<template>
  <h2>Unsere Zimmer mit Details</h2>

</template>

<style scoped>

</style>