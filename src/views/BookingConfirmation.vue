<script>

import PersonalData from "@/components/booking/PersonalData.vue";
import HotelContactInformation from "@/components/HotelContactInformation.vue";
import RoomDetails from "@/components/RoomDetails.vue";
import HotelLocation from "@/components/bookingConfirmation/HotelLocation.vue";
import {useBookingApiStore} from "@/stores/bookingApiStore";
import { bookingDataStore } from "@/stores/bookingDataStore";


// booking con

export default {
  name: "BookingConfirmation",

data() {
    return {
      bookingData: null,
      bookingDataStore: bookingDataStore(),
      roomId: null,
      bookingApi: useBookingApiStore(),
    }
},
// get bookingdata from the bookingDataStore
  created() {
      this.bookingData = this.bookingDataStore.bookingData;
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