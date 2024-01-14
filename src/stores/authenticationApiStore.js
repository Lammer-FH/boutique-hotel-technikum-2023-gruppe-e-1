import { defineStore } from "pinia";
import axios from "axios";
import { config } from "@fortawesome/fontawesome-svg-core";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useAuthenticationApiStore = defineStore("authenticationApi", {
  state: () => ({
    hasLoginError: false,
    token: localStorage.token,
    hasRegistrationError: false,
    confirmRegistration: false,
  }),

  actions: {
    /*
      Post user data to backend
      If successful store received token in stores state variable token and 
      local storage item token
    */
    postLogin(loginData) {
      const data = {
        clientId: loginData.email,
        secret: loginData.password,
      };
      return axios
        .post(apiUrl + "login", data)
        .then((response) => {
          this.$state.token = response.data;
          localStorage.token = response.data;
          this.$state.hasLoginError = false;
        })
        .catch((error) => {
          console.error("Error Post Login");
          this.$state.hasLoginError = true;
        });
    },
    /*
      remove local storage item token and set stores state variable to null
    */
    logout() {
      localStorage.removeItem("token");
      this.$state.token = null;
    },
    postRegisterUser(registrationData) {
      const data = {
        firstname: registrationData.firstName,
        lastname: registrationData.lastName,
        email: registrationData.email,
        username: registrationData.username,
        password: registrationData.password
      };
      return axios
        .post(apiUrl + "register", data)
        .then((response) => {
          this.$state.confirmRegistration = true;
        })
        .catch((error) => {
          console.log(error)
          console.error("Error Post Registration");
          this.hasRegistrationError = true;
        });
    },
  },
});
