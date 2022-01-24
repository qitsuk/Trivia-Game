<script setup>import ScoreAnswersVue from '../components/Results/ScoreAnswers.vue';
import TriviaHeaderVue from '../components/TriviaHeader.vue';
import ReplayReturn from '../components/Results/ReplayReturn.vue';
import ScoreAnswers from '../components/Results/ScoreAnswers.vue';
import { apiUserPatch, apiUserPost } from '../api/users';
import { ref } from 'vue';

const username = ref('user1')
const highScore = ref(100)
const userId = 1

const postUser = async () => { 
  //first implement patch in users.js, then:
  //in here (later as vuex action): if a get call w username returns an object, save the id in that obj and conduct a patch with it
    //else post 

    //dewald The best approach would be to check the length of the returned array :)
  const data = await apiUserPost(username.value, highScore.value) 
  console.log('data in resultscreen', data)
}


const patchUser = async () => {
  const data = await apiUserPatch(userId, highScore.value) 
  console.log('data in resultscreen', data)
}


// has a replayreturn component to play more rounds of Trivia
// has a ScoreAnswers component to show results
</script>

<template>
  <h1>result screen!</h1>
  <button @click="postUser">testpost</button>
  <button @click="patchUser">testpatch</button>
  <ReplayReturn></ReplayReturn>
  <ScoreAnswers></ScoreAnswers>
</template>

<style scoped>

</style>