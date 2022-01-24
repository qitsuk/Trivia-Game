<script setup>
import {computed, ref} from 'vue'
import Question from '../components/Question/Question.vue';
import { useStore } from 'vuex';

// contains a question component for each question in the current game
// ends with button that submits  the answers in all question components
//current version ignores the Question component, might reintroduce it later

//note fra opgaven: " The app must ONLY display ONE question at a time.""
const store = useStore()
let answer = ref('')
const answers = computed(() => store.state.answers)
const questions = computed(() => store.state.questions)
let index = 0
const question = questions.value[0] //probably cleaner to replace this with vue x getter that takes in an index as argument
const answerOptions = []
answerOptions.push(question.correct_answer)
for (let answerOption in question.incorrect_answers){
  answerOptions.push(answerOption)
}

//handler for the nextquestion button
const nextQuestion = () => {
  store.commit('addAnswer', answer.value)
}

</script>

<template>
  <h1>question screen!</h1>

  <Question></Question>
  <!-- ^will show a sequence of the above component programatically //consider how much of this goes in Question component -->
   <button id="nextQuestion" @click="nextQuestion">Next question</button>

<!-- TODO make this dynamic 2 or 4 answer options based on  of currentquestion.type being "multiple" or "truefalse (forgot name)" -->
  <span>{{question.question}}</span>
  <br>
  <input
  type="radio"
  name="answerOptions"
  v-for="answer in answerOptions"
  :key="answer"
  v-model="answer"
  />
  
    
  <button style="visibility:hidden">Check answers</button>

</template>

<style scoped>

</style>