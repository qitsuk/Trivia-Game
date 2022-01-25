<script setup>
import { computed, onMounted } from 'vue';
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


let usersArray;
//updates the user highscore in the API
const updateHighScore = async () => {  //ISSUE: this code is fine, but get requests can only find default users dewaldels and gingerbread
    const oldScore = computed(() => store.getters.getHighScore)
    if (oldScore.value > newScore){
        return
    }
    store.commit('setHighScore', newScore)
    usersArray = await store.dispatch("getUserFromApi");
    console.log('users array', usersArray)
    if (usersArray.length > 0){
        let userId = usersArray[0].id
        console.log(userId, 'exists')
        store.commit('setUserId', userId)
        const response = await store.dispatch('patchHighScoreToApi')
        console.log('resp', response)
     } else {
        const response = await store.dispatch("postHighScoreToApi")
         console.log('new user post resp', response)
     }
    }


//calculates user score, 100 points pr. correct answer
const calculateNewScore = () => { //refactor into a vue x mutation that maybe includes the compariso with oldscore
    for (let i = 0; i < userAnswers.value.length; i++){
        if (userAnswers.value[i] === correctAnswers.value[i]){
            newScore += 10
        }
    }
}

// onMounted(() => {
//     calculateNewScore()
//     updateHighScore()
// })
const button = () => {
    calculateNewScore()
    updateHighScore()
}


// shows the user's score in this game + whether it exceeds previous highscore
// shows correct answer to each question along with the user's answer

</script>
<template>
    <h3>Score</h3>
    <button @click="button">test</button>

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