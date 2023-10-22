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
            <RouterLink class="link-underline link-underline-opacity-0" to="/">
              <b-nav-item class="text-end me-3" href="#">
                Home
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="/rooms">
              <b-nav-item class="text-end me-3" href="#">
                Zimmer
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="/booking">
              <b-nav-item class="text-end me-3" href="#">
                Buchen
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="/about">
              <b-nav-item class="text-end me-3" href="#">
                Über Uns
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="/culinary_art">
              <b-nav-item class="text-end me-3" href="#" >
                Kulinarik
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="/sparetime">
              <b-nav-item class="text-end me-3" href="#">
                Freizeit
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="/arrival_contact">
              <b-nav-item class="text-end me-3" href="#">
                Anreise & Kontakt
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="/login">
              <b-nav-item class="text-end me-3" href="#">
                Login
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="booking_history">
              <b-nav-item class="text-end me-3" href="#" hidden="hidden">
                Buchungshistorie
              </b-nav-item>
            </RouterLink>
            <RouterLink class="link-underline link-underline-opacity-0" to="personal_data">
              <b-nav-item class="text-end me-3" href="#" hidden="hidden">
                Persönliche Daten
              </b-nav-item>
            </RouterLink>
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