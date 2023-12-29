<script>
import {useRegisterUserApiStore} from "@/stores/registerUserApiStore";
import ConfirmationModal from "../ConfirmationModal.vue";

export default {
  name: "RegistrationForm",
  // Data from the Parent
  props: ["registrationData"],
  data() {
    return {
      // access registerUserApiStore
      registrationApi: useRegisterUserApiStore(),
      modalData: {
        title: "",
        message: "",
      },
      isModalHidden: true,
    };
  },
  methods: {
    // call the Api in the store with the registrationData
    registerUser() {
      this.registrationApi.postRegisterUser(this.registrationData)
          .then( () => {
            if (this.registrationApi.confirmRegistration) {
              this.modalData.title = "Registrierungsbestätigung";
              this.modalData.message = "Registrierung erfolgreich durchgeführt. Sie können sich nun mit ihrer Emailadresse und Passwort einloggen.";
              this.isModalHidden = false;
            } else {
              this.modalData.title = "Registrierung fehlgeschlagen";
              this.modalData.message = "Bitte registrieren Sie sich erneut.";
              this.isModalHidden = false;
            }
          });

    },
  },
  components: { ConfirmationModal },
};
</script>

<template>
  <BContainer fluid class="pb-3 border-bottom">
      <BRow>
      <BCol> Name:</BCol>
      <BCol> {{ registrationData.firstName }} {{ registrationData.lastName }}</BCol>
    </BRow>
    <BRow>
      <BCol> Anschrift:</BCol>
      <BCol> {{ registrationData.adress }}</BCol>
    </BRow>
    <BRow>
      <BCol> Postleitzahl:</BCol>
      <BCol> {{ registrationData.postcode }}</BCol>
    </BRow>
    <BRow>
      <BCol> Ort:</BCol>
      <BCol> {{ registrationData.city }}</BCol>
    </BRow>
    <BRow>
      <BCol> eMail Adresse:</BCol>
      <BCol> {{ registrationData.emailAdress }}</BCol>
    </BRow>
    <BRow>
    <BCol> Passwort:</BCol>
    <BCol> {{ registrationData.password }}</BCol>
  </BRow>
    <BRow>
      <BCol> Passwort wiederholen:</BCol>
      <BCol> {{ registrationData.passwordConfirm }}</BCol>
    </BRow>


  </BContainer>

  <div class="d-grid gap-2">
    <button type="submit" class="btn btn-primary" @click="registerUser()">
      Registrieren
    </button>
  </div>

  <div>
    <ConfirmationModal :modalData="this.modalData" :isHidden="isModalHidden" />
  </div>
</template>

<style scoped></style>
