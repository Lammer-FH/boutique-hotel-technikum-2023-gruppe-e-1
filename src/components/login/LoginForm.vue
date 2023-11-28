<script>
export default {
  name: "LoginForm",
};
</script>

<template>
  <div class="col-sm-6 border border-top-0 border-start-0 border-bottom-0">
    <div class="row mr-3">
      <div class="col-sm">
        <label for="email" class="form-label">E-Mailadresse</label>
        <input id="email" name="email" type="email" class="form-control mb-3" />
        <div class="form-text" id="email-message"></div>
      </div>
    </div>
    <div class="row mr-3">
      <div class="col-sm">
        <label for="password" class="form-label">Passwort</label>
        <input
          id="password"
          name="password"
          type="password"
          class="form-control mb-3"
        />
        <div class="form-text" id="password-message"></div>
      </div>
    </div>
    <div class="row mr-3">
      <div class="col-sm d-grid">
        <button id="login-button" type="button" class="btn btn-primary">
          Anmelden
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
