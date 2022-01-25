<script setup>
import { computed, ref, reactive } from 'vue'
import Question from '../components/Question/Question.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
// contains a question component for each question in the current game
// ends with button that submits  the answers in all question components
//current version ignores the Question component, might reintroduce it later
const router = useRouter()
const store = useStore()
const userAnswers = computed(() => store.state.UserAnswers)
const questions = computed(() => store.state.questions)

let answer = ref('')
let answerOptions = reactive([])
let currentQuestion = ref('')
let currentQuestionNumber = ref(0)
let finishedLastQuestion = ref(false)

//handler for the nextquestion button
const nextQuestionButton = () => {
  if (!answer.value) {
    return
  }
  store.commit('addAnswer', answer.value);
  answer.value = ''
  answerOptions.splice(0, answerOptions.length)
  currentQuestionNumber.value += 1;
  if (questions.value[currentQuestionNumber.value] === undefined) {
    router.push('results')
  } else {
    updateQuestionAndAnswers();
  }
}

//NOTE remember to randomize the order of answerOptions array https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

//gets a new question and loads its answer options to be shown on the page
const updateQuestionAndAnswers = () => {
  currentQuestion.value = questions.value[currentQuestionNumber.value] //probably cleaner to replace this with vue x getter that takes in an index as argument
  answerOptions.push(currentQuestion.value.correct_answer)
  for (let answerOption in currentQuestion.value.incorrect_answers) {
    answerOptions.push(currentQuestion.value.incorrect_answers[answerOption]);
  }
}

onMounted(() => {
  updateQuestionAndAnswers()
});


</script>

<template>
  <h1>Questions!</h1>
  <p>{{ currentQuestion.question }}</p>

  <select v-model="answer">
    <option disabled value>Choose an answer</option>
    <option v-for="answerOption in answerOptions" :key="answerOption">{{ answerOption }}</option>
  </select>

  <button id="nextQuestion" @click="nextQuestionButton">Next question</button>

  <Question></Question>
</template>

<style scoped>
</style>