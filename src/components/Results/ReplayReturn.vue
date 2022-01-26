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
const replaySameSettings= () => {
  router.push('questions')
  store.commit('setDefaultReplay')
    
}

</script>
<template>
    <button id="returnToStart"
    @click="returnToStart"
    >Return to start page</button>

    <button id="replaySameSettings"
    @click="replaySameSettings"
    >Replay with the same settings</button>
</template>

<style scoped>

</style>