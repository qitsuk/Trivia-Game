

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue'

let newScore = 0
const store = useStore()

const questions = computed(() => store.getters.getQuestions)



const calculateScore = () => { //refactor into a vue x getter later
    const correctAnswers = computed(() => store.getters.getCorrectAnswers)
    const userAnswers = computed(() => store.getters.getUserAnswers)
    for (let i = 0; i < userAnswers.value.length; i++){
        if (userAnswers.value[i] === correctAnswers.value[i]){
            newScore += 100
        }
    }
    console.log('score', newScore)
    console.log('correct answers', correctAnswers.value)
    console.log('user answers', userAnswers.value)
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