<script setup>
import { ref } from "vue";
import { apiUserSignin } from "../api/users";

//IGNORE THE BUGGY ATTEMPT AT API CALL

//SETUP FOR A NEW GAME: 
// input field for username
// get available game settings (nr of questions, category, difficulty) from question database
// input menus for game settings filled out with result of get request above
// button to start playing and place input into vue x store

const userName = ref('')

const onSignin = async () => {
  const [error, userData] = await apiUserSignin(userName.value)
  console.log(userData)
}

</script>

<template>
  <h1>start screen!</h1>

  
  <form>
    <fieldset>
      <label for = "username">Username</label>
      <input type="text"
      id="username" 
      placeholder="Your username here"
      v-model="userName"
      />
    </fieldset>
    <button 
    type="button"
    @click="onSignin"
    >Start playing</button>
  </form>

  
</template>

<style scoped>

</style>