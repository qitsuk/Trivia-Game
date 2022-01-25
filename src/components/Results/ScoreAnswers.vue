<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
let newScore = 0
const questionTitles = computed(() => store.getters.getQuestionTitles)
const correctAnswers = computed(() => store.getters.getCorrectAnswers)
const userAnswers = computed(() => store.getters.getUserAnswers)
const results = {}
for (let i = 0; i < userAnswers.value.length; i++){
    results[i] = {
        questionTitle : questionTitles.value[i],
        userAnswer: userAnswers.value[i],
        correctAnswer: correctAnswers.value[i]
    }
}


//calculates user score, 100 points pr. correct answer
const calculateScore = () => { //refactor into a vue x getter later
    
    for (let i = 0; i < userAnswers.value.length; i++){
        if (userAnswers.value[i] === correctAnswers.value[i]){
            newScore += 100
        }
    }
}


calculateScore()

// shows the user's score in this game + whether it exceeds previous highscore
// shows correct answer to each question along with the user's answer

</script>
<template>
    <h3>Score</h3>

    <p
    id="newScore"
    v-bind="newScore">Your score: {{newScore}}</p>

    <h3>Correct answers</h3>
    <div v-for="result in results" :key="result"><b>{{result.questionTitle}}</b>
    <ul>
        <li>Your answer: {{result.userAnswer}}</li>
        <li>Correct answer: {{result.correctAnswer}}</li>
    </ul>
    </div>


</template>

<style scoped>

</style>