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
      breakfast: true,
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
        /*
       let personalData = {
         firstName: this.firstName,
         lastName: this.lastName,
         emailAdress: this.emailAdress,
         emailAdressConfirm: this.emailAdressConfirm,
         breakfast: this.breakfast,
       };
       this.$emit("personalData", personalData);
     */

      }
      },
  },
};
//ToDo
// frühstück pre ausgewählt
// warnings besser machen
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
    <span v-if="v$.firstName.$error">
      {{ v$.firstName.$errors[0].$message }}
    </span>
  </div>
  <div class="mb-3">
    <label for="lastName" class="form-label">Nachname:</label>
    <input type="text"
           class="form-control"
           id="lastName"
           v-model="state.lastName"/>
    <span v-if="v$.lastName.$error">
      {{ v$.lastName.$errors[0].$message }}
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
    <span v-if="v$.emailAdress.$error">
      {{ v$.emailAdress.$errors[0].$message }}
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
    <span v-if="v$.emailAdressConfirm.$error">
      {{ v$.emailAdressConfirm.$errors[0].$message }}
    </span>
  </div>

  <div class="mb-3">
    <label for="breakfast" class="form-label">Frühstück:</label>
    <div>
      <b-form-group>
        <b-form-radio v-model="state.breakfast" name="breakfast" value="true"
        >Ja
        </b-form-radio>
        <b-form-radio v-model="state.breakfast" name="breakfast" value="false"
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
