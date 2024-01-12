
<script>
import RegistrationForm from "@/components/registration/RegistrationForm.vue";

export default {
  name: "RegisterUserView",
  components: { RegistrationForm },
  data() {
    return {
      registrationData: {
        firstName: "",
        lastName: "",
        adress: "",
        postcode: "",
        city: "",
        emailAdress: "",
        password: "",
        passwordConfirm: ""
      }
    };
  }
}

</script>

<template>
  <div class="m-3">
    <h1>Registrierung</h1>
    <RegistrationForm :registrationData="registrationData" />
  </div>
</template>

<style scoped>
</style>
