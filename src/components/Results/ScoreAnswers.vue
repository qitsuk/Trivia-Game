<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

// shows the user's score in this game + whether it exceeds previous highscore
// shows correct answer to each question along with the user's answer

//vue setup
const store = useStore()


//vars for calculating and displaying the user's results
let newScore = ref(0)
const questionTitles = computed(() => store.getters.getQuestionTitles)
const correctAnswers = computed(() => store.getters.getCorrectAnswers)
const userAnswers = computed(() => store.getters.getUserAnswers)
const results = {}
for (let i = 0; i < userAnswers.value.length; i++) {
    results[i] = {
        questionTitle: questionTitles.value[i],
        userAnswer: userAnswers.value[i],
        correctAnswer: correctAnswers.value[i]
    }
}
let usersArray;

//calculates user score, 10 points pr. correct answer
const calculateNewScore = () => {
    for (let i = 0; i < userAnswers.value.length; i++) {
        if (userAnswers.value[i] === correctAnswers.value[i]) {
            newScore.value += 10
        }
    }
}

//updates the user highscore in the API. first GETs to see if user already exists, and uses this info to choose POST or PATCH for the update
const updateHighScore = async () => { //ISSUE when user already exists, it still POSTS (else-block) because GET can't find non-default users
    calculateNewScore()
    const oldScore = computed(() => store.getters.getHighScore)
    if (oldScore.value > newScore.value) {
        return
    }
    store.commit('setHighScore', newScore.value)
    usersArray = await store.dispatch("getUserFromApi");
    if (usersArray.length > 0) {
        let userId = usersArray[0].id
        store.commit('setUserId', userId)
        const response = await store.dispatch('patchHighScoreToApi')
    } else {
        const response = await store.dispatch("postHighScoreToApi")
    }
}


//calls the function to update highscore in api when component is mounted.
onMounted(() => {
    updateHighScore()
})


</script>
<template>
    <h1 class="text-3xl">
        <b>Here are your results:</b>
    </h1>
    <p id="newScore" v-bind="newScore"><b>Your score: {{ newScore }}</b></p>

    <h3>Correct answers</h3>
    <div v-for="result in results" :key="result">
        <b>{{ result.questionTitle }}</b>
        <ul>
            <li>Your answer: {{ result.userAnswer }}</li>
            <li>Correct answer: {{ result.correctAnswer }}</li>
        </ul>
    </div>
</template>

<style scoped>
</style>