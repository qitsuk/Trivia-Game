<script setup>
import { ref } from "vue";
import { apiUserGet } from "../api/users";

let username = ref("") //will refer to an input field
let user = {}


const getUser = async () => { 
  const data = await apiUserGet(username.value) 
  user = data
  console.log(user)
}


//SETUP FOR A NEW GAME: 
// input field for username
// get available game settings (nr of questions, category, difficulty) from question database
// input menus for game settings filled out with result of get request above
// button to start playing and place input into vue x store


</script>

<template>
  <h1>start screen!</h1>

  
</template>

<style scoped>

</style>