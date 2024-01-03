<script>
export default {
  name: "ConfirmBooking",

  // Data from the Parent
  props: ["modalData", "isHidden"],
  watch:{
        isHidden(newIsHidden){
            if(newIsHidden == false){
                this.$refs.confirmationModal.show();
            }
        }
    },
};
</script>

<template>
  <div>
    <b-modal ref="confirmationModal" id="confirmationModel" :title="this.modalData.title" ok-only>
      <p class="my-4"> {{ this.modalData.message }} </p>
      <p class="my-4"> {{ this.modalData.details }} </p>

    </b-modal>
  </div>
</template>

<style scoped></style>

