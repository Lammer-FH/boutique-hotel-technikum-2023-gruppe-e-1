<script>
export default {
  name: "Alert",
  // Data from the Parent
  props: ["type", "message"],
  data(){
    return {
      alertClass: "alert alert-dismissible fade show"
    }
  },
  watch: {
    
  },
  computed: {
    changeAlertClass(){
      return this.alertClass + " alert-" + this.type;
    }
  },
  methods: {
    sendClose(){
      this.$emit('is-alert-open', false)
    }
  },
  components: { },
};
</script>

<template>
  <div :class="changeAlertClass" role="alert">
    {{ message }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="sendClose"></button>
  </div>
</template>

<style scoped></style>
