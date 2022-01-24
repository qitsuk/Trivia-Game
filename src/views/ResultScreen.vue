<script setup>import ScoreAnswersVue from '../components/Results/ScoreAnswers.vue';
import TriviaHeaderVue from '../components/TriviaHeader.vue';
import ReplayReturn from '../components/Results/ReplayReturn.vue';
import ScoreAnswers from '../components/Results/ScoreAnswers.vue';
import { apiUserPost } from '../api/users';
import { ref } from 'vue';

const username = ref('user1')
const highScore = ref(100)
let user = {}

const postUser = async () => { 
  const data = await apiUserPost(username.value, highScore.value) 
  user = data
  console.log('data in resultscreen', user)
}


// has a replayreturn component to play more rounds of Trivia
// has a ScoreAnswers component to show results
</script>

<template>
  <h1>result screen!</h1>
  <button @click="postUser">testpost</button>
  <ReplayReturn></ReplayReturn>
  <ScoreAnswers></ScoreAnswers>
</template>

<style scoped>

</style>