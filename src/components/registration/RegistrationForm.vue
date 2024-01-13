<script>
import ConfirmationModal from "../ConfirmationModal.vue";
import {useAuthenticationApiStore} from "../../stores/authenticationApiStore";

export default {
  name: "RegistrationForm",
  // Data from the Parent
  props: ["registrationData"],


  data() {
    return {
      authenticationApi: useAuthenticationApiStore(),
      modalData: {
        title: "",
        message: "",
      },
      showPassword: false,
      isModalHidden: true,
      user: {
        firstName: "",
        lastName: "",
        adress: "",
        postalcode: "",
        city: "",
        email: "",
        emailConfirm: "",
        username: "",
        password: "",
        passwordConfirm: ""
      },
      errors: {
        firstName: "",
        lastName: "",
        adress: "",
        postalcode: "",
        city: "",
        email: "",
        emailConfirm: "",
        username: "",
        password: "",
        passwordConfirm: ""
      }
    };
  },

  methods: {
    // call the Api in the store with the registrationData

    validateFirstName() {
      this.errors.firstName = this.user.firstName ? '' : 'Feld darf nicht leer sein!';
    },

    validateLastName() {
      this.errors.lastName = this.user.lastName ? '' : 'Feld darf nicht leer sein!';
    },

    validateAdress() {
      this.errors.adress = this.user.adress ? '' : 'Feld darf nicht leer sein!';
    },

    validatePostalcode() {
      this.errors.postalcode = this.user.postalcode ? '' : 'Feld darf nicht leer sein!';
    },

    validateCity() {
      this.errors.city = this.user.city ? '' : 'Feld darf nicht leer sein!';
    },

    isEmailValid(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    },

    validateEmail() {
      if (!this.user.email) {
        this.errors.email = 'Feld darf nicht leer sein!';
      } else if (!this.isEmailValid(this.user.email)) {
        this.errors.email = 'Ungültige eMail Adresse!';
      } else {
        this.errors.email = '';
      }
    },

    validateEmailConfirm() {
      if (!this.user.emailConfirm) {
        this.errors.emailConfirm = 'Feld darf nicht leer sein!';
      } else if (this.user.email !== this.user.emailConfirm) {
        this.errors.emailConfirm = 'eMail Adressen stimmen nicht überein!';
      } else {
        this.errors.emailConfirm = '';
      }
    },

    validateUsername() {
      this.errors.username = this.user.username ? '' : 'Feld darf nicht leer sein!';
    },

    validatePassword() {
      if (!this.user.password) {
        this.errors.password = 'Feld darf nicht leer sein!';
      } else if (this.user.password.length < 12) { // Example: password must be at least 6 characters
        this.errors.password = 'Passwort muss mindestens 12 Zeichen lang sein';
      } else {
        this.errors.password = '';
      }
    },

    validatePasswordConfirm() {
      if (!this.user.passwordConfirm) {
        this.errors.passwordConfirm = 'Feld darf nicht leer sein!';
      } else if (this.user.password !== this.user.passwordConfirm) {
        this.errors.passwordConfirm = 'Passwörter stimmen nicht überein!';
      } else {
        this.errors.passwordConfirm = '';
      }
    },


    registerUser() {
      this.validationOfAllFields();
      if (this.checkIfFormIsValid()) {
        this.authenticationApi.postRegisterUser(this.user)
            .then(() => {
              if (this.authenticationApi.confirmRegistration) {
                this.modalData.title = "Registrierungsbestätigung";
                this.modalData.message = "Registrierung erfolgreich durchgeführt. Sie können sich nun mit ihrer Emailadresse und Passwort einloggen.";
                this.isModalHidden = false;
              } else {
                this.modalData.title = "Registrierung fehlgeschlagen";
                this.modalData.message = "Bitte registrieren Sie sich erneut.";
                this.isModalHidden = false;
              }
            });
      }
    },


    // goes through all the error messages of the fields and checks if there is an error message or not
    checkIfFormIsValid() {
      for (let key in this.errors) {
        if (this.errors[key]) return false;  // If any error message is not empty, the form is invalid
      }
      return true; // If no errors, the form is valid
    },

    validationOfAllFields(){
      this.validateFirstName();
      this.validateLastName();
      this.validateAdress();
      this.validatePostalcode();
      this.validateCity();
      this.validateEmail();
      this.validateEmailConfirm();
      this.validateUsername();
      this.validatePassword();
      this.validatePasswordConfirm();
    }


  },

  components: {
    ConfirmationModal
  }
  ,
}
;
</script>

<template>

  <div class="mb-3">
    <label for="firstName" class="form-label">Vorname:</label>
    <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="user.firstName"
        @blur="validateFirstName"
    />
    <span class="text-danger"> {{ errors.firstName }}
  </span>

  </div>

  <div class="mb-3">
    <label for="lastName" class="form-label">Nachname:</label>
    <input type="text"
           class="form-control"
           id="lastName"
           v-model="user.lastName"
           @blur="validateLastName"
    />


    <span class="text-danger">
       {{ errors.lastName }}
     </span>
  </div>

  <div class="mb-3">
    <label for="street" class="form-label">Strasse:</label>
    <input
        type="text"
        class="form-control"
        id="street"
        v-model="user.adress"
        @blur="validateAdress"
    />
    <span class="text-danger">
          {{ errors.adress }}
    </span>

  </div>

  <div class="mb-3">
    <label for="postalcode" class="form-label">Postleitzahl:</label>
    <input
        type="number"
        class="form-control"
        id="postalcode"
        v-model="user.postalcode"
        @blur="validatePostalcode"
    />
    <span class="text-danger">
        {{ errors.postalcode }}
    </span>
  </div>

  <div class="mb-3">
    <label for="city" class="form-label">Ort:</label>
    <input
        type="text"
        class="form-control"
        id="city"
        v-model="user.city"
        @blur="validateCity"
    />
    <span class="text-danger">
          {{ errors.city }}
    </span>
  </div>

  <div class="mb-3">
    <label for="emailAdress" class="form-label">eMail Adresse:</label>
    <input
        type="email"
        class="form-control"
        id="emailAdress"
        v-model="user.email"
        @blur="validateEmail"
    />
    <span class="text-danger">
    {{ errors.email }}
  </span>
  </div>

  <div class="mb-3">
    <label for="emailAdressConfirm" class="form-label"
    >eMail Adresse bestätigen:</label>
    <input
        type="email"
        class="form-control"
        id="emailAdressConfirm"
        v-model="user.emailConfirm"
        @blur="validateEmailConfirm"
    />
    <span class="text-danger">
    {{ errors.emailConfirm }}
  </span>

  </div>

  <div class="d-grid gap-2">
    <div class="mb-3">
      <label for="username" class="form-label"
      >Username:</label>
      <input
          type="text"
          class="form-control"
          id="username"
          v-model="user.username"
          @blur="validateUsername"
      />

      <span class="text-danger">
    {{ errors.username }}
       </span>

    </div>
  </div>

  <div class="d-grid gap-2">
    <div class="mb-3">
      <label for="password" class="form-label">Passwort:</label>
      <input
          :type="showPassword ? 'text' : 'password'"
          class="form-control"
          id="password"
          v-model="user.password"
          @blur="validatePassword"
      />
      <span class="text-danger">
 {{ errors.password }}
   </span>
    </div>

    <div class="d-grid gap-2">
      <div class="mb-3">
        <label for="passwordConfirm" class="form-label">Passwort wiederholen:</label>
        <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            id="passwordConfirm"
            v-model="user.passwordConfirm"
            @blur="validatePasswordConfirm"
        />
        <span @click="showPassword = !showPassword"><u>Passwort anzeigen</u></span><br>
        <span class="text-danger"> {{ errors.passwordConfirm }}
   </span>
      </div>

      <div class="d-grid gap-2">
        <b-button variant="primary"
            type="submit"
            :disabled="!checkIfFormIsValid()"
            @click="registerUser()"
        >
          Registrieren
        </b-button>
      </div>

      <div>
        <ConfirmationModal :modalData="this.modalData" :isHidden="isModalHidden"/>
      </div>

    </div>
  </div>
</template>
<style scoped>

</style>
