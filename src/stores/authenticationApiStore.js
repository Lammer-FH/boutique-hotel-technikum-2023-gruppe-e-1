import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useAuthenticationApiStore = defineStore("authenticationApi", {
  state: () => ({
    hasLoginError: false,
  }),

  actions: {
     postLogin(loginData) {
      const data = {
        clientId: loginData.email,
        secret: loginData.password,
      }
      return axios
        .post(
          apiUrl + "login",
          data
        )
        .then((response) => {
          localStorage.token = response.data
        })
        .catch((error) => {
          console.error("Error Post Login");
          this.hasLoginError = true;
        });
    },
  },
});
