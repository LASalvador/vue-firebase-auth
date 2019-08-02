<template>
    <div class="sign-in">
        <h1>Crie uma nova conta</h1>
        <input 
        type="text" 
        placeholder="Email"
        v-model="email">
        <br>
        <input 
        type="password" 
        placeholder="Senha"
        v-model="senha">
        <br>
        <button @click="registrar">Registrar-se</button>
        <p> Ou retorne <router-link to="/login">ao login</router-link> </p>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        registrar(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    console.log(user);
                    window.location.href = 'http://localhost:8080/';
                },
                (err) => {
                    alert('OPS' + err.message);
                }
            );
        }
    }
}
</script>

<style scoped>

</style>
