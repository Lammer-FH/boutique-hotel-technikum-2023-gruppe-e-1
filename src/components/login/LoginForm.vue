<script>
import { useAuthenticationApiStore } from "../../stores/authenticationApiStore";

export default {
  name: "LoginForm",
  data() {
    return {
      authenticationApi: useAuthenticationApiStore(),
      loginData: { email: "", password: "" },
    };
  },
  methods: {
    login() {
      console.log(this.loginData);
      this.authenticationApi.postLogin(this.loginData).then(() => {
        this.sendDataToLoginView();
      });
    },
    sendDataToLoginView(){
      const data = this.authenticationApi.hasLoginError;
      this.$emit("handle-login", data);
    }
  },
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
  </div>
</template>

<style scoped></style>
