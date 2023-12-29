
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
//TODO: Design noch überarbeiten
//TODO: bei LoginView auf Registerview verlinken
//TODO: überlegen, wo im Akkordeon auf die Registerview verwiesen werden soll, wo macht es sinn, das der User darüber informiert wird, dass es ein Login gibt?

</script>

<template>
  <div>
    Registrierung
    <RegistrationForm :registrationData="registrationData" />
  </div>
</template>

<style scoped>
</style>
