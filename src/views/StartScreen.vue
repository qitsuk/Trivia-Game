<script setup>
import { ref } from "vue";
import { apiUserSignin } from "../api/users";

const a = ref('')
const userName = ref('')

const onSignin = async () => {
  const [error, userData] = await apiUserSignin(username.value)
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
      v-model.lazy="userName"
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