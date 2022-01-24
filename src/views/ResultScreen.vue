<script setup>
import ReplayReturn from '../components/Results/ReplayReturn.vue';
import ScoreAnswers from '../components/Results/ScoreAnswers.vue';
import { apiUserGet, apiUserPatch, apiUserPost } from '../api/users';
import { ref } from 'vue';
// has a replayreturn component to play more rounds of Trivia
// has a ScoreAnswers component to show results

// TEST VALUES FOR UPDATEHIGHSCORE, WILL LATER GET THESE FROM VUE X STORE
const username = ref('new')
const highScore = ref(600)


//checks if current user exists and then either POSTS or PATCHES 
//rewrite, seems to POST no matter what - note that this version is against the guidelines, they split out recording of user and highscore
const updateUserHighscore = async () => {
  const checkUserExists = await apiUserGet(username.value)
  if (checkUserExists.length > 0){
    const data = await apiUserPost(username.value, highScore.value) 
    console.log('data in resultscreen post', data)
  } else {
    const userId = checkUserExists[0].id
    console.log('existing userid', userId)
    const data = await apiUserPatch(userId, highScore.value) 
    console.log('data in resultscreen patch', data)
  }
}



</script>

<template>
  <h1>result screen!</h1>
  <button @click="updateUserHighscore">test updateUserHighscore</button>
  <ReplayReturn></ReplayReturn>
  <ScoreAnswers></ScoreAnswers>
</template>

<style scoped>

</style>