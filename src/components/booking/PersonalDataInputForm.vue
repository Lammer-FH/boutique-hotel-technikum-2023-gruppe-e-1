<script>
import {useVuelidate} from '@vuelidate/core'
import {required, email, sameAs} from '@vuelidate/validators'
import {reactive, computed} from "vue";


export default {
  name: "PersonalDataInputForm",
  props: {},

  emits: ["personalData"],

  // initiate Vuelidate
  setup() {
    const state = reactive({
      firstName: "",
      lastName: "",
      emailAdress: "",
      emailAdressConfirm: "",
      breakfast: "Ja",
    })

    const rules = computed(() => {
      return {
        firstName: {required},
        lastName: {required},
        emailAdress: {required, email},
        emailAdressConfirm: {required, email, sameAs: sameAs(state.emailAdress)},
        breakfast: {required},
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      state,
      v$
    }
  },

  methods: {

    continueToConfirmBooking() {
      this.v$.$validate()
      if (!this.v$.$error) {
        let personalData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailAdress: this.state.emailAdress,
          emailAdressConfirm: this.state.emailAdressConfirm,
          breakfast: this.state.breakfast,
        };
        this.$emit("personalData", personalData);
      }
    },
  },
};
//ToDo
// birthdate

</script>

<template>

  <div class="mb-3">
    <label for="firstName" class="form-label">Vorname:</label>
    <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="state.firstName"
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
           v-model="state.lastName"/>
    <span class="text-danger" v-if="v$.lastName.$error">
      Feld darf nicht leer sein!
    </span>
  </div>

  <div class="mb-3">
    <label for="emailAdress" class="form-label">eMail Adresse:</label>
    <input
        type="text"
        class="form-control"
        id="emailAdress"
        v-model="state.emailAdress"
    />
    <span class="text-danger" v-if="v$.emailAdress.$error">
      Feld darf nicht leer sein! / Ungültige eMail Adresse!
    </span>
  </div>

  <div class="mb-3">
    <label for="emailAdressConfirm" class="form-label"
    >eMail Adresse bestätigen:</label
    >
    <input
        type="text"
        class="form-control"
        id="emailAdressConfirm"
        v-model="state.emailAdressConfirm"
    />
    <span class="text-danger" v-if="v$.emailAdressConfirm.$error">
      Ungültige eMail Adresse! / eMail Adressen stimmen nicht überein!
    </span>
  </div>

  <div class="mb-3">
    <label for="breakfast" class="form-label">Frühstück:</label>
    <div>
      <b-form-group>
        <b-form-radio v-model="state.breakfast" name="breakfast" value="Ja"
        >Ja
        </b-form-radio>
        <b-form-radio v-model="state.breakfast" name="breakfast" value="Nein"
        >Nein
        </b-form-radio>
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
