<script setup>
import { onMounted, ref } from "vue";
import { apiUserGet } from "../api/users";
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



const onSignin = async () => {
  const [error, userData] = await apiUserSignin(userName.value);
  console.log(userData);
};
</script>

<template>
  <div class="centered">
    <form>
      <h1>Welcome to our Trivia Game</h1>
      <fieldset>
        <label for="username" class="label-style"
          ><b>What is your username?</b></label
        >
        <br />
        <input
          type="text"
          id="username"
          placeholder="Your username here"
          v-model.lazy="userName"
        />
        <br />
        <label for="difficulty" class="label-style"
          ><b>Choose your difficulty:</b></label
        >
        <br />
        <select id="difficulty-select" v-model.lazy="difficulty">
          <option disabled value="">Choose here</option>
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
        </select>
        <br />
        <label for="numberOfQuestions" class="label-style"
          ><b>How many questions would you like?</b></label
        >
        <br />
        <input
          type="number"
          v-model.number.lazy="numberOfQuestions"
          placeholder="Enter number of quesitons"
        />
        <br />
        <button type="button">Start The Game!</button>
      </fieldset>
    </form>
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
.label-style {
  font-size: larger;
}
</style>