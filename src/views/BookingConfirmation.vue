<script>
import {computed} from "vue";
import PersonalData from "@/components/booking/PersonalData.vue";

export default {
  name: "BookingConfirmation",

data() {
    return {
      bookingData: null
    }
},

  created() {
    // change string back to json object
    try {
      this.bookingData = JSON.parse(this.$route.params.bookingData);
      console.log("Parsed bookingData:", this.bookingData);
    } catch (error) {
      console.error("Error parsing bookingData:", error);
    }
  },

  components: { PersonalData }


}


</script>

<template>

  <p>läuft</p>
  <p>{{this.bookingData.firstName}}</p>

  <PersonalData :personalData="this.bookingData" />

</template>

<style scoped>



</style>