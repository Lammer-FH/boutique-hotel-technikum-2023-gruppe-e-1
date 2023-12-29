import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useRegisterUserApiStore = defineStore("registrationApi", {
    state: () => ({
        hasRegistrationError: false

    }),

    actions: {
        postRegisterUser(registrationData) {
            const data = {
                firstname: registrationData.firstname,
                lastname: registrationData.password,
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
                    localStorage.token = response.data
                })
                .catch((error) => {
                    console.error("Error Post Registration");
                    this.hasRegistrationError = true;
                });
        },
    },
});
