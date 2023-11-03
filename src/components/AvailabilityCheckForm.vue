<script>
export default {
  name: "AvailabilityCheckForm",
};
</script>

<template>
  <div class="mb-3">
    <label for="date-from" class="form-label"
      >Anreisedatum:</label
    >
    <input
      type="date"
      class="form-control"
      id="date-from"
    />
  </div>
  <div class="mb-3">
    <label for="date-to" class="form-label"
      >Abreisedatum:</label
    >
    <input
      type="date"
      class="form-control"
      id="date-to"
    />
  </div>
  <div class="mb-3">
    <label for="number-of-persons" class="form-label"
      >Anzahl der Personen:</label
    >
    <input
      type="number"
      class="form-control"
      id="number-of-persons"
    />
  </div>
  <div class="d-grid gap-2">
    <button type="submit" class="btn btn-primary ">Verfügbarkeit prüfen</button>
  </div>
</template>

<style scoped></style>
