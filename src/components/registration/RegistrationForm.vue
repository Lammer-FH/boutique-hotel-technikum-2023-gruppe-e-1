<script>
import {useRegisterUserApiStore} from "@/stores/registerUserApiStore";
import ConfirmationModal from "../ConfirmationModal.vue";
import {useVuelidate} from '@vuelidate/core'
import {computed, reactive} from "vue";
import {email, numeric, required, sameAs} from "@vuelidate/validators";

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
      inputFromUser: {...this.registrationData}
    };
  },

  setup() {
    const state = reactive({
      firstName: "",
      lastName: "",
      adress: "",
      //   city: "",
      //   postalcode: 1234,
      emailAdress: "",
      emailAdressConfirm: "",
      username: "",
      password: "",
      passwordConfirm: ""

    })
    const rules = computed(() => {
      return {
        firstName: {required},
        lastName: {required},
        adress: {required},
        //   city: {required},
        //   postalcode: {required, numeric},
        emailAdress: {required, email},
        emailAdressConfirm: {required, email, sameAs: sameAs(state.emailAdress)},
        username: {required},
        password: {required},
        passwordConfirm: {required, sameAs: sameAs(state.password)}
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      state,
      v$
    }
  },

  methods: {
    // call the Api in the store with the registrationData

    registerUser() {
      this.registrationApi.postRegisterUser(this.inputFromUser)
          .then(() => {
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
//TODO: noch v$ und error handling usw einfügen!
    },


    checkIfFormIsValid() {
      this.v$.$touch();
      this.v$.$validate()
      if (!this.v$.$error) {
        //form is valid, proceed with submission
        this.registerUser()
      }
    },
  },
  components: {ConfirmationModal},
};
</script>

<template>

  <div class="mb-3">
    <label for="firstName" class="form-label">Vorname:</label>
    <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="inputFromUser.firstName"
    />
    <span class="text-danger" v-if="v$.firstName.$error">
    Feld darf nicht leer sein!
  </span>

  </div>

  <div class="mb-3">
    <label for="lastName" class="form-label">Nachname:</label>
    <input type="text"
           class="form-control"
           id="lastName"
           v-model="inputFromUser.lastName"/>

    <span class="text-danger" v-if="v$.lastName.$error">
       Feld darf nicht leer sein!
     </span>
    -->

  </div>

  <div class="mb-3">
    <label for="street" class="form-label">Strasse:</label>
    <input
        type="text"
        class="form-control"
        id="street"
        v-model="inputFromUser.adress"
    />
    <span class="text-danger" v-if="v$.adress.$error">
          Feld darf nicht leer sein!
    </span>

  </div>

  <div class="mb-3">
    <label for="emailAdress" class="form-label">eMail Adresse:</label>
    <input
        type="text"
        class="form-control"
        id="emailAdress"
        v-model="inputFromUser.email"
    />
    <span class="text-danger" v-if="v$.emailAdress.$error">
    Feld darf nicht leer sein! / Ungültige eMail Adresse!
  </span>
  </div>

  <div class="mb-3">
    <label for="emailAdressConfirm" class="form-label"
    >eMail Adresse bestätigen:</label>
    <input
        type="text"
        class="form-control"
        id="emailAdressConfirm"
        v-model="inputFromUser.emailAdressConfirm"
    />
    <span class="text-danger" v-if="v$.emailAdressConfirm.$error">
    Ungültige eMail Adresse! / eMail Adressen stimmen nicht überein!
  </span>

  </div>

  <div class="d-grid gap-2">
    <div class="mb-3">
      <label for="username" class="form-label"
      >Username:</label
      >
      <input
          type="text"
          class="form-control"
          id="username"
          v-model="inputFromUser.username"
      />

      <span class="text-danger" v-if="v$.username.$error">
   Das Feld darf nicht leer sein.
       </span>

    </div>
  </div>

  <div class="d-grid gap-2">
    <div class="mb-3">
      <label for="password" class="form-label">Passwort:</label>
      <input
          type="text"
          class="form-control"
          id="password"
          v-model="inputFromUser.password"
      />
      <span class="text-danger" v-if="v$.password.$error">
 Das Feld darf nicht leer sein.
   </span>
    </div>

    <div class="d-grid gap-2">
      <div class="mb-3">
        <label for="passwordConfirm" class="form-label">Passwort wiederholen:</label>
        <input
            type="text"
            class="form-control"
            id="passwordConfirm"
            v-model="inputFromUser.passwordConfirm"
        />
        <span class="text-danger" v-if="v$.passwordConfirm.$error">
 Das Feld darf nicht leer sein. // Passwort stimmt nicht überein.
   </span>
      </div>

      <div class="d-grid gap-2">
        <button
            type="submit"
            class="btn btn-primary"
            @click="checkIfFormIsValid">
          Registrieren
        </button>
      </div>

      <div>
        <ConfirmationModal :modalData="this.modalData" :isHidden="isModalHidden"/>
      </div>

    </div>
  </div>
</template>
<style scoped>

</style>
