<script>
import {useVuelidate} from '@vuelidate/core'
import {required, email, sameAs} from '@vuelidate/validators'
import {reactive, computed} from "vue";


export default {
  name: "PersonalDataInputForm",
  props: {},

// Data for the parent
  emits: ["personalData"],


  setup() {
    const state = reactive({
      firstName: "",
      lastName: "",
      emailAdress: "",
      emailAdressConfirm: "",
      breakfast: "Ja",
      birthday: "",
    })

    /*
    initialize Vuelidate
     */
    const rules = computed(() => {
      return {
        firstName: {required},
        lastName: {required},
        emailAdress: {required, email},
        emailAdressConfirm: {required, email, sameAs: sameAs(state.emailAdress)},
        breakfast: {required},
        birthday: {required},
      }
    })
    const v$ = useVuelidate(rules, state)

    /*
    set current data and max data for the Birthday Data Picker to be at least 18 years in the past.
     */
    function getMaxDate() {
      const currentDate = new Date();
      const minDate = new Date(
          currentDate.getFullYear() - 18,
          currentDate.getMonth(),
          currentDate.getDate()
      );
      return minDate.toISOString().split('T')[0];
    }

    return {
      state,
      v$,
      getMaxDate,
    }
  },

  methods: {

    // on Button click: checks if all required Fields are filled, stores all values int the personalData Object and continues to next Tab
    continueToConfirmBooking() {
      this.v$.$validate()
      if (!this.v$.$error) {
        let personalData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailAdress: this.state.emailAdress,
          emailAdressConfirm: this.state.emailAdressConfirm,
          breakfast: this.state.breakfast,
          birthday: this.state.birthday,
        };
        this.$emit("personalData", personalData);
      }
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
    <label for="birthday" class="form-label">Geburtstag:</label>
    <input
        type="date"
        class="form-control"
        id="birthday"
        v-model="state.birthday"
    />
    <span class="text-danger" v-if="v$.birthday.$error">
      Bitte Datum auswählen!
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
