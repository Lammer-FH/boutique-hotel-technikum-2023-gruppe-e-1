<script>

import router from "../../router";
import { useAuthenticationApiStore } from "../../stores/authenticationApiStore";
import ConfirmationModal from "../ConfirmationModal.vue";

export default {
  name: "LoginForm",
  data() {
    return {
      authenticationApi: useAuthenticationApiStore(),
      loginData: { email: "", password: "" },
      apiMessage: {
        title: "",
        message: "",
      },
      isModalHidden: true,
    };
  },
  methods: {
    /*
      Post the users entered Data, then check for error.
      if there is an error set data for modal and open it,
      Otherwise redirect to Booking History
    */
    login() {
      this.authenticationApi.postLogin(this.loginData).then(() => {
        if (this.authenticationApi.$state.hasLoginError) {
          this.apiMessage.title = "Fehler beim Login";
          this.apiMessage.message =
            "Es ist ein Fehler beim Login aufgetreten. Überprüfuen Sie Ihre Eingaben und versuchen Sie erneut sich anzumelden.";
          this.isModalHidden = false;
        } else {
          router.push({path: '/booking_history'});
        }
      });
    },
  },
  components: { ConfirmationModal },

};
</script>

<template>
  <div class="col-sm-6 border border-top-0 border-start-0 border-bottom-0">
    <div class="row mr-3">
      <div class="col-sm">
        <label for="email" class="form-label">E-Mailadresse</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control mb-3"
          v-model="this.loginData.email"
        />
        <div class="form-text" id="email-message"></div>
      </div>
    </div>
    <div class="row mr-3">
      <div class="col-sm">
        <label for="password" class="form-label">Passwort</label>
        <input
          id="password"
          name="password"
          type="password"
          class="form-control mb-3"
          v-model="this.loginData.password"
        />
        <div class="form-text" id="password-message"></div>
      </div>
    </div>
    <div class="row mr-3">
      <div class="col-sm d-grid">
        <button
          id="login-button"
          type="button"
          class="btn btn-primary"
          @click="login"
        >
          Anmelden
        </button>
      </div>
    </div>

    <div>
      <ConfirmationModal
        :modalData="this.apiMessage"
        :isHidden="isModalHidden"
      />
    </div>

  </div>
</template>

<style scoped></style>
