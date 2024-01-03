

<script>

import PersonalData from "@/components/booking/PersonalData.vue";
import HotelContactInformation from "@/components/HotelContactInformation.vue";

export default {
  name: "ConfirmBooking",
  // Data from the Parent
  props: ["modalData", "isHidden"],
  watch: {
        isHidden(newIsHidden){
            if(newIsHidden == false){
                this.$refs.confirmationModal.show();

            }
        }
    },
  components: {PersonalData, HotelContactInformation },
  methods: {
    printModalContent() {
      // Open print dialog for the modal content
      window.print();
    },
  },ç

};
</script>

<template>

  <div>
    <b-modal ref="confirmationModal" id="confirmationModal" :title="this.modalData.title" ok-only>

      <b-list-group>
        <b-list-group-item>
          <p class="my-4"> {{ this.modalData.message }} </p>
        </b-list-group-item>
        <b-list-group-item>
          <PersonalData v-if="this.modalData.bookingOk" :personalData="this.modalData.details" />
        </b-list-group-item>
        <b-list-group-item>
          <HotelContactInformation />
        </b-list-group-item>
      </b-list-group>

      <b-button @click="printModalContent" variant="primary">Print</b-button>





    </b-modal>
  </div>
</template>

<style scoped></style>

