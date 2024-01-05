<script>

import PersonalData from "@/components/booking/PersonalData.vue";
import HotelContactInformation from "@/components/HotelContactInformation.vue";
import RoomDetails from "@/components/bookingConfirmation/RoomDetails.vue";
import HotelLocation from "@/components/bookingConfirmation/HotelLocation.vue";

export default {
  name: "BookingConfirmation",

data() {
    return {
      bookingData: null,
      roomId: null,
    }
},

  created() {
    // change string back to json object
    try {
      this.bookingData = JSON.parse(this.$route.params.bookingData);
      } catch (error) {
      console.error("Error parsing bookingData:", error);
    }

    this.roomId = this.bookingData.selectedRoomId;


  },

  methods: {
    printContent() {
      window.print();
    }
  },

  components: { PersonalData, HotelContactInformation, RoomDetails, HotelLocation }


}


</script>

<template>

  <b-list-group>
    <b-list-group-item>
      <h1>Buchungsbestätigung</h1>
    </b-list-group-item>
    <b-list-group-item>
      <PersonalData :personalData="this.bookingData" />
    </b-list-group-item>
    <b-list-group-item>
      <RoomDetails :roomId="this.roomId"/>
    </b-list-group-item>
    <b-list-group-item>
      <HotelLocation />
    </b-list-group-item>
    <b-list-group-item>
      <HotelContactInformation />
    </b-list-group-item>

  </b-list-group>

  <b-button @click="printContent" variant="primary">Print</b-button>


</template>

<style scoped>



</style>