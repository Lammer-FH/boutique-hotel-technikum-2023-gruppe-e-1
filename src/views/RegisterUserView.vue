
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
  <div>
    Registrierung
    <RegistrationForm :registrationData="registrationData" />
  </div>
</template>

<style scoped>
</style>
