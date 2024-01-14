<script>

// modal that shows up when the booking failed

import HotelContactInformation from "@/components/HotelContactInformation.vue";
import RoomDetails from "@/components/RoomDetails.vue";

export default {
  name: "ConfirmBooking",
  props: ["modalData", "isHidden"],
  watch: {
        isHidden(newIsHidden){
            if(newIsHidden == false){
                this.$refs.confirmationModal.show();
            }
        }
    },
  components: { HotelContactInformation,RoomDetails },
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
          <HotelContactInformation />
        </b-list-group-item>
      </b-list-group>
    </b-modal>
  </div>
</template>


