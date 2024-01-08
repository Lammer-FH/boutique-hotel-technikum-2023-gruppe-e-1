<script>

import PersonalData from "@/components/booking/PersonalData.vue";
import HotelContactInformation from "@/components/HotelContactInformation.vue";
import RoomDetails from "@/components/bookingConfirmation/RoomDetails.vue";
import HotelLocation from "@/components/bookingConfirmation/HotelLocation.vue";
import {useBookingApiStore} from "@/stores/bookingApiStore";

export default {
  name: "BookingConfirmation",

data() {
    return {
      bookingData: null,
      roomId: null,
      bookingApi: useBookingApiStore(),
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
    },
    goHome() {
      this.$router.push({path: "/"})
    }
  },

  components: { PersonalData, HotelContactInformation, RoomDetails, HotelLocation }
}
</script>

<template>

  <b-container>

  <b-list-group>
    <b-list-group-item>
      <h1>Buchungsbestätigung</h1>
    </b-list-group-item>
    <b-list-group-item>
      <p>BuchungsID: {{this.bookingApi.bookingID}} </p>
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
    <b-list-group-item>
      <!-- mixed vue bootstrap with standard boostrap, could not find a way to allign the button to the right side?! -->
      <div class="row justify-content-end">
        <div class="col-auto">
          <b-button @click="printContent" variant="primary">Print</b-button>
        </div>
        <div class="col-auto">
          <b-button @click="goHome" variant="primary">Home</b-button>
        </div>
      </div>
    </b-list-group-item>
  </b-list-group>



  </b-container>


</template>

<style scoped>



</style>