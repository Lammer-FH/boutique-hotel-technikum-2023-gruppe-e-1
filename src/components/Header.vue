<script>
import {BIconPerson, BIconList, BIconX, BIconPersonCircle} from 'bootstrap-icons-vue';

export default {
  name: "Header",
  components: {
    BIconPersonCircle,
    BIconList,
    BIconX
  }
}
</script>

<template>


    <div class="row">
      <b-navbar toggleable type="light" variant="light">
        <b-navbar-brand class="col-7 text-center">
          <RouterLink to="/">
            <img src="../images/logo.png" class="img-fluid">
          </RouterLink>
        </b-navbar-brand>

        <b-button class="col-2" variant="light">
          <BIconPersonCircle></BIconPersonCircle>
        </b-button>

        <b-navbar-toggle class="col-2" target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <BIconX v-if="expanded"></BIconX>
            <BIconList v-else></BIconList>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav >

          <b-navbar-nav class="ml-auto">
            <b-nav-item class="text-end me-3" href="#">
              <RouterLink class="link-underline link-underline-opacity-0" to="/">Home</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#">
              <RouterLink class="link-underline link-underline-opacity-0" to="/rooms">Zimmer</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#">
              <RouterLink class="link-underline link-underline-opacity-0" to="/booking">Buchen</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#">
              <RouterLink class="link-underline link-underline-opacity-0" to="/about">Über Uns</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#" >
              <RouterLink class="link-underline link-underline-opacity-0" to="/culinary_art">Kulinarik</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#">
              <RouterLink class="link-underline link-underline-opacity-0" to="/sparetime">Freizeit</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#">
              <RouterLink class="link-underline link-underline-opacity-0" to="/arrival_contact">Anreise & Kontakt</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#">
              <RouterLink class="link-underline link-underline-opacity-0" to="/login">Login</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#" hidden="hidden">
              <RouterLink class="link-underline link-underline-opacity-0" to="booking_history">Buchungshistorie</RouterLink>
            </b-nav-item>
            <b-nav-item class="text-end me-3" href="#" hidden="hidden">
              <RouterLink class="link-underline link-underline-opacity-0" to="personal_data">Persönliche Daten</RouterLink>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <br>
    </div>

</template>

<style scoped>

.test {
  text-decoration: none;
}

</style>