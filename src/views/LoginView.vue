<script>
import LoginForm from "../components/login/LoginForm.vue";
import GoToRegister from "../components/login/GoToRegister.vue";

export default {
  name: "LoginView",
  components: { LoginForm, GoToRegister },
};
</script>

<template>
  <h1>Login</h1>

  <div id="login-container" class="container">
    <div class="card text-dark bg-light mx-auto mt-3">
      <div class="card-body">
        <div class="row">
          <LoginForm />
          <GoToRegister />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
