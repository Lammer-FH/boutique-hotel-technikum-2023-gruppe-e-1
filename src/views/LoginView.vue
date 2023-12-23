<script>
import LoginForm from '../components/login/LoginForm.vue';
import GoToRegister from '../components/login/GoToRegister.vue';
import Alert from '../components/Alert.vue';

export default {
    name: "LoginView",
    data(){
        return {
            hasLoginError: false,
            isShownAlert: false,
            loginAlertClass: "",
            loginMessage: "",
        }
    },
    methods:{
        handleLogin(data){
            this.isShownAlert = true;
            this.hasLoginError = data;
            if(this.hasLoginError){
                this.loginAlertClass = "danger";
                this.loginMessage = "Fehler beim Login. Bitte versuchen Sie es erneut."
            } else {
                this.loginAlertClass = "success";
                this.loginMessage = "Sie sind angemeldet."
            }
            console.log(data);
        },
        setIsShownAlert(isAlertOpen){
            console.log("isAlertOpen: " + isAlertOpen)
            this.isShownAlert = isAlertOpen;
        }
    },
    components: { LoginForm, GoToRegister, Alert}
}
</script>

<template>
<h1>Login</h1>
<Alert v-if="isShownAlert" :type="loginAlertClass" :message="loginMessage" @is-alert-open="setIsShownAlert"></Alert>
<div id="login-container" class="container">
        <div class="card text-dark bg-light mx-auto mt-3">
            <div class="card-body">
                <div class="row">
                    <LoginForm @handle-login="handleLogin"/>
                    <GoToRegister/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>