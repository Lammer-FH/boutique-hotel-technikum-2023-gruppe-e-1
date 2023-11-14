<script>
import axios from "axios";

export default {
  name: "PersonalDataInputForm",
  props: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAdress: "",
      emailAdressConfirm: "",
      breakfast: true,
      personalData: [],
    };
  },

  computed: {},

  watch: {
    // debuging
    breakfast() {
      console.log(this.breakfast);
    },
  },

  methods: {
    // debuging
    /*  clickTest() {
      let personalData = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdress: this.emailAdress,
        emailAdressConfirm: this.emailAdressConfirm,
        breakfast: this.breakfast,
      };
      console.log(
        this.firstName,
        this.lastName,
        this.emailAdress,
        this.emailAdressConfirm,
        this.breakfast
      );
      console.log(personalData);
    },
    */

    continueToConfirmBooking() {
      let personalData = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdress: this.emailAdress,
        emailAdressConfirm: this.emailAdressConfirm,
        breakfast: this.breakfast,
      };
      this.$emit("personalData", personalData);
    },
  },
};
</script>

<template>
  <div class="mb-3">
    <label for="firstName" class="form-label">Vorname:</label>
    <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="firstName"
    />
  </div>
  <div class="mb-3">
    <label for="lastName" class="form-label">Nachname:</label>
    <input type="text" class="form-control" id="lastName" v-model="lastName" />
  </div>

  <div class="mb-3">
    <label for="emailAdress" class="form-label">eMail Adresse:</label>
    <input
        type="text"
        class="form-control"
        id="emailAdress"
        v-model="emailAdress"
    />
  </div>

  <div class="mb-3">
    <label for="emailAdressConfirm" class="form-label"
    >eMail Adresse bestätigen:</label
    >
    <input
        type="text"
        class="form-control"
        id="emailAdressConfirm"
        v-model="emailAdressConfirm"
    />
  </div>

  <div class="mb-3">
    <label for="breakfast" class="form-label">Frühstück:</label>
    <div>
      <b-form-group>
        <b-form-radio v-model="breakfast" name="breakfast" value="true"
        >Ja</b-form-radio
        >
        <b-form-radio v-model="breakfast" name="breakfast" value="false"
        >Nein</b-form-radio
        >
      </b-form-group>
    </div>
  </div>

  <div class="d-grid gap-2">
    <button
        type="submit"
        class="btn btn-primary"
        @click="continueToConfirmBooking"
    >
      Buchen
    </button>
  </div>
</template>

<style scoped></style>
