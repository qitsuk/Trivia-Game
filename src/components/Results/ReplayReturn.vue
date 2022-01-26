<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
// has 2 buttons:
// 1 to return to the start screen
// 1 to play again with new questions but same difficulty, category, and nr of questions

//vue setup
const router = useRouter()
const store = useStore()


//returns to startpage and resets all session information about user and game settings
const returnToStart = () => {
  router.push('/')
  store.commit('setDefaultRestart')
}

//replays trivia game with same settings, but resets answers and questions
const replaySameSettings = () => {
  router.push('questions')
  store.commit('setDefaultReplay')

}

</script>
<template>
  <div>
    <button
      id="returnToStart"
      class="bg-emerald-900 text-2xl p-3 rounded-2xl m-3"
      @click="returnToStart"
    >Return to Start Page</button>
  </div>
  <div>
    <button id="replaySameSettings" @click="replaySameSettings" class="bg-yellow-400 text-2xl p-3 rounded-2xl m-3">Play Again with Same Settings</button>
  </div>
</template>

<style scoped>
</style>