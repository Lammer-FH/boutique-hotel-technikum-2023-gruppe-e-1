import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useRegisterUserApiStore = defineStore("registrationApi", {
    state: () => ({
        hasRegistrationError: false,
        confirmRegistration: false
    }),
//TODO: was hat es mit dem String auf sich im PDF von lammer bei der PostRegistrationUserApi?
    actions: {
        postRegisterUser(registrationData) {
            const data = {
                firstname: registrationData.firstName,
                lastname: registrationData.lastName,
                email: registrationData.email,
                username: registrationData.username,
                password: registrationData.password

            }
            return axios
                .post(
                    apiUrl + "register",
                    data
                )
                .then((response) => {
                    this.$state.confirmRegistration = true,
                    localStorage.token = response.data
                })
                .catch((error) => {
                    console.error("Error Post Registration");
                    this.hasRegistrationError = true;
                });
        },
    },
});
