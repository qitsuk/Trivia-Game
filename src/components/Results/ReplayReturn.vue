

<script setup>
import { useRouter } from 'vue-router';
// has 2 buttons:
// 1 to return to the start screen
// 1 to play again with new questions but same difficulty, category, and nr of questions
const router = useRouter()

const returnToStart = () => {
  router.push('/')
}

const replaySameSettings= () => {
    //todo
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