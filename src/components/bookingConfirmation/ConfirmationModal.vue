

<script>

import PersonalData from "@/components/booking/PersonalData.vue";

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
  components: {PersonalData }
};
</script>

<template>
  <div>
    <b-modal ref="confirmationModal" id="confirmationModel" :title="this.modalData.title" ok-only>




      <b-list-group>
        <b-list-group-item>
          <p class="my-4"> {{ this.modalData.message }} </p>
        </b-list-group-item>
        <b-list-group-item>
          <PersonalData v-if="this.modalData.bookingOk" :personalData="this.modalData.details" />
        </b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>

    </b-modal>
  </div>
</template>

<style scoped></style>

