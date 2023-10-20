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
          <RouterLink to="/">Home</RouterLink>
        </b-nav-item>

        <b-nav-item href="#">Buchen</b-nav-item>
        <b-nav-item href="#">Kulinarik</b-nav-item>
        <b-nav-item href="#">Freizeit</b-nav-item>
        <b-nav-item href="#">Anreise & Kontakt</b-nav-item>
        <b-nav-item href="#">Login</b-nav-item>
        <b-nav-item href="#">Buchungshistorie</b-nav-item>
        <b-nav-item href="#">Persönliche Daten</b-nav-item>

        <b-nav-item href="#">
          <RouterLink to="/about">About</RouterLink>
        </b-nav-item>






      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</template>

<style scoped>

</style>