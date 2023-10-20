<script>
import { BIconPerson, BIconList, BIconX, BIconPersonCircle} from 'bootstrap-icons-vue';
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
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="#">Logo folgt</b-navbar-brand>

      <b-button variant="light">
        <BIconPersonCircle></BIconPersonCircle>
      </b-button>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <BIconX v-if="expanded"></BIconX>
        <BIconList v-else></BIconList>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          <RouterLink to="/rooms">Zimmer</RouterLink>
        </b-nav-item>
        <b-nav-item href="#">
          <RouterLink to="/booking">Buchen</RouterLink>
        </b-nav-item>
        <b-nav-item href="#">
          <RouterLink to="/culinary_art">Kulinarik</RouterLink>
        </b-nav-item>
        <b-nav-item href="#">
          <RouterLink to="/sparetime">Freizeit</RouterLink>
        </b-nav-item>
        <b-nav-item href="#">
          <RouterLink to="/arrival_contact">Anreise & Kontakt</RouterLink>
        </b-nav-item>
        <b-nav-item href="#">
          <RouterLink to="/login">Login</RouterLink>
        </b-nav-item>
        <b-nav-item href="#">
          <RouterLink to="booking_history">Buchungshistorie</RouterLink>
        </b-nav-item>
        <b-nav-item href="#">
          <RouterLink to="personal_data">Persönliche Daten</RouterLink>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</template>

<style scoped>

</style>