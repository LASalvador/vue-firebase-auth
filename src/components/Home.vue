<template>
    <div>
        <h1>Home</h1>
        <button @click="sair">Sair</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: '',
    data() {
        return {

        }
    },
    methods:{
        sair(){
            firebase.auth().signOut().then(() => {
                window.location.href = 'http://localhost:8080/login'
            })
        }
    }
}
</script>

<style scoped>

</style>
