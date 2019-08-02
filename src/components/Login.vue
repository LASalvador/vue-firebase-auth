<template>
    <div class="login">
        <h1>Login</h1>
        <input 
        type="text" 
        placeholder="Email"
        v-model="email"/>
        <br>
        <input 
        type="password" 
        placeholder="Senha"
        v-model="senha"/>
        <br>
        <div class="btn-login">
            <button @click="entrar">Login</button>
        </div>
        <p>
            Você não tem conta?
            <router-link to="/registrar">Crie uma</router-link>
        </p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        entrar() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    this.$router.push('home');
                    alert(`Bem Vindo, ${{email}}`);
                },
                (err) => {
                    alert('OPS!!' + err.message);
                }
            );
        }
    }
}
</script>

<style scoped>

</style>
