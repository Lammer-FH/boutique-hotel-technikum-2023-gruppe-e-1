<script>
export default {
  name: "PersonalData",
  props: ["personalData"],
}
</script>

<template>
  <BContainer fluid class="pb-3" v-if="personalData">
    <BRow>
      <BCol> gewählter Zeitraum:</BCol>
      <BCol> {{ personalData.dateFrom }} - {{ personalData.dateTo }}</BCol>
    </BRow>
    <BRow>
      <BCol> Anzahl der Personen:</BCol>
      <BCol> {{ personalData.numberOfPersons }}</BCol>
    </BRow>
    <BRow>
      <BCol> Name:</BCol>
      <BCol> {{ personalData.firstName }} {{ personalData.lastName }}</BCol>
    </BRow>
    <BRow>
      <BCol> Geburtsdatum:</BCol>
      <BCol> {{ personalData.birthday }}</BCol>
    </BRow>
    <BRow>
      <BCol> eMail Adresse:</BCol>
      <BCol> {{ personalData.emailAdress }}</BCol>
    </BRow>
    <BRow>
      <BCol> Frühstück:</BCol>
      <BCol> {{ personalData.breakfast }}</BCol>
    </BRow>




  </BContainer>
</template>

<style scoped>

</style>