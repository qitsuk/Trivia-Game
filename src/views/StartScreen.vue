<script setup>
import { ref } from "vue";
import { apiUserGet } from "../api/users";
import StartScreenForm from "../components/StartScreen/StartScreenForm.vue";
const username = ref("") //will refer to an input field
let user = {}


//SETUP FOR A NEW GAME:
// input field for username
// get available game settings (nr of questions, category, difficulty) from question database
// input menus for game settings filled out with result of get request above
// button to start playing and place input into vue x store

const userName = ref("");
const difficulty = ref("");
const numberOfQuestions = ref("");

const getUser = async () => { 
  const data = await apiUserGet(userName.value) 
  user = data;
  console.log(user);
}

</script>

<template>
  <div class="centered">
    <StartScreenForm />
  </div>
</template>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>