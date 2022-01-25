<script setup>
import {computed, ref} from 'vue'
import Question from '../components/Question/Question.vue';
import { useStore } from 'vuex';

// contains a question component for each question in the current game
// ends with button that submits  the answers in all question components
//current version ignores the Question component, might reintroduce it later

const store = useStore()
let answer = ref('')
const answers = computed(() => store.state.answers)
const questions = computed(() => store.state.questions)

let answerOptions = []
let currentQuestion = ''
let currentQuestionNumber = ref(0)

const updatePageContent = () => {
  currentQuestion = questions.value[currentQuestionNumber.value] //probably cleaner to replace this with vue x getter that takes in an index as argument
  answerOptions = []
  answerOptions.push(currentQuestion.correct_answer)
  for (let answerOption in currentQuestion.incorrect_answers){
      answerOptions.push(currentQuestion.incorrect_answers[answerOption])
     }
  
}

updatePageContent()
//handler for the nextquestion button
const nextQuestion = () => {
  store.commit('addAnswer', answer.value)
  currentQuestionNumber.value += 1
  updatePageContent()
  currentQuestion = questions.value[currentQuestionNumber.value]

}

</script>

<template>
  <h1>question screen!</h1>

  <p>{{currentQuestion.question}}</p> FIX THE RENDERING OF THIS WITH CONDITIONAL RENDERING, AND THEN SOME LIFECYCLE HOOK STUFF FOR RE-RENDERING AFTER "NEXTQUESTION" BUTTON 

  <select v-model="answer">
    <option disabled value="">Choose an answer</option>
    <option v-for="answerOption in answerOptions" :key="answerOption">{{answerOption}}</option>
  </select>

  <button id="nextQuestion" @click="nextQuestion">Next question</button>
    
  <button style="visibility:hidden">Check answers</button>

</template>

<style scoped>

</style>