

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue'

let newScore = 0
const store = useStore()
const userAnswers = computed(() => store.state.answers)
const questions = computed(() => store.getters.getQuestions)



const calculateScore = () => { //refactor into a vue x getter later
    const correctAnswers = computed(() => store.getters.getCorrectAnswers)
    console.log(correctAnswers.value)
}


calculateScore()

// shows the user's score in this game + whether it exceeds previous highscore
// shows correct answer to each question along with the user's answer

</script>
<template>
<h3>score and answers</h3>

<span
    id="newScore"
    v-bind="newScore">Your score: {{newScore}}</span>

</template>

<style scoped>

</style>