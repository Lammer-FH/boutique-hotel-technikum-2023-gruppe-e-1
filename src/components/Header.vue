<script>
import {
  BIconPerson,
  BIconList,
  BIconX,
  BIconPersonCircle,
} from "bootstrap-icons-vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useAuthenticationApiStore } from "../stores/authenticationApiStore";

export default {
  name: "Header",
  components: {
    BIconPersonCircle,
    BIconList,
    BIconX,
  },
  data() {
    return {
    };
  },
  methods: {
    /*
      call logout method and redirect to home-page
    */
    logout() {
      useAuthenticationApiStore().logout();
      this.$router.push("/");
    },
  },
  computed: {
    /*
      check if token exists in store
    */
    isLoggedIn() {
      if (useAuthenticationApiStore().$state.token === null) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<template>
  <b-navbar toggleable type="light" variant="light" class="container-fluid">
    <b-navbar-brand>
      <RouterLink to="/">
        <img
          src="../assets/images/logo.png"
          class="img-fluid"
          id="header-logo"
        />
      </RouterLink>
    </b-navbar-brand>

    <b-navbar-nav class="ms-auto mb-2 mb-lg-0">
      <div class="container">
        <RouterLink
          v-if="isLoggedIn"
          class="link-underline link-underline-opacity-0"
          to="/booking_history"
        >
          <b-button variant="light" id="user-button">
            <font-awesome-icon icon="user"></font-awesome-icon>
          </b-button>
          <b-tooltip target="user-button" triggers="hover">
            zur Buchungshistorie
          </b-tooltip>
        </RouterLink>

        <RouterLink
          v-if="!isLoggedIn"
          class="link-underline link-underline-opacity-0"
          to="/login"
        >
          <b-button variant="light" id="login-button">
            <font-awesome-icon icon="right-to-bracket"></font-awesome-icon>
          </b-button>
          <b-tooltip target="login-button" triggers="hover"> Login </b-tooltip>
        </RouterLink>

        <b-button v-if="isLoggedIn" variant="light" id="logout-button" @click="logout">
          <font-awesome-icon icon="right-from-bracket"></font-awesome-icon>
        </b-button>
        <b-tooltip target="logout-button" triggers="hover"> Logout </b-tooltip>
      </div>
    </b-navbar-nav>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <BIconX v-if="expanded"></BIconX>
        <BIconList v-else></BIconList>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav>
        <RouterLink class="link-underline link-underline-opacity-0" to="/">
          <b-nav-item class="text-end me-3" href="#"> Home </b-nav-item>
        </RouterLink>
        <RouterLink class="link-underline link-underline-opacity-0" to="/rooms">
          <b-nav-item class="text-end me-3" href="#"> Zimmer </b-nav-item>
        </RouterLink>
        <RouterLink
          class="link-underline link-underline-opacity-0"
          to="/booking"
        >
          <b-nav-item class="text-end me-3" href="#"> Buchen </b-nav-item>
        </RouterLink>
        <RouterLink class="link-underline link-underline-opacity-0" to="/about">
          <b-nav-item class="text-end me-3" href="#"> Über Uns </b-nav-item>
        </RouterLink>
        <RouterLink
          class="link-underline link-underline-opacity-0"
          to="/culinary_art"
        >
          <b-nav-item class="text-end me-3" href="#"> Kulinarik </b-nav-item>
        </RouterLink>
        <RouterLink
          class="link-underline link-underline-opacity-0"
          to="/sparetime"
        >
          <b-nav-item class="text-end me-3" href="#"> Freizeit </b-nav-item>
        </RouterLink>
        <RouterLink
          class="link-underline link-underline-opacity-0"
          to="/arrival_contact"
        >
          <b-nav-item class="text-end me-3" href="#">
            Anreise & Kontakt
          </b-nav-item>
        </RouterLink>
        <RouterLink
          v-if="!isLoggedIn"
          class="link-underline link-underline-opacity-0"
          to="/login"
        >
          <b-nav-item class="text-end me-3" href="#"> Login </b-nav-item>
        </RouterLink>
        <RouterLink
          class="link-underline link-underline-opacity-0"
          to="booking_history"
        >
          <b-nav-item v-if="isLoggedIn" class="text-end me-3" href="#">
            Buchungshistorie
          </b-nav-item>
        </RouterLink>
        <RouterLink
          class="link-underline link-underline-opacity-0"
          to="personal_data"
        >
          <b-nav-item class="text-end me-3" href="#" hidden="hidden">
            Persönliche Daten
          </b-nav-item>
        </RouterLink>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
#header-logo {
  max-width: 150px;
}
</style>
