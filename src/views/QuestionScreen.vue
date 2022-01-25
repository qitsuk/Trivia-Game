<script setup>
import { computed, ref, reactive } from 'vue'
import Question from '../components/Question/Question.vue';
import { useStore } from 'vuex';

// contains a question component for each question in the current game
// ends with button that submits  the answers in all question components
//current version ignores the Question component, might reintroduce it later

const store = useStore()
let answer = ref('')
const answers = computed(() => store.state.answers)
const questions = computed(() => store.state.questions)

let answerOptions = reactive([])
let currentQuestion = ref('')
let currentQuestionNumber = ref(0)
let finishedLastQuestion = ref(false)

const updateQuestionAndAnswers = () => {
  currentQuestion.value = questions.value[currentQuestionNumber.value] //probably cleaner to replace this with vue x getter that takes in an index as argument
  console.log('assigned new que of' + currentQuestion.value.question)
  answerOptions.push(currentQuestion.value.correct_answer)
  for (let answerOption in currentQuestion.value.incorrect_answers) {
    answerOptions.push(currentQuestion.value.incorrect_answers[answerOption]);
  }
  console.log(answerOptions);
  
}

//handler for the nextquestion button
const nextQuestion = () => {
  if (!answer.value){
    return
  }
  store.commit('addAnswer', answer.value);
  answer.value = ''
  answerOptions.splice(0, answerOptions.length)
  currentQuestionNumber.value += 1;
  if (questions.value[currentQuestionNumber.value] === undefined){
    finishedLastQuestion.value = true
  } else {
    updateQuestionAndAnswers();
  }
}

updateQuestionAndAnswers()

</script>

<template>
  <h1>Questions!</h1>

  <p>{{ currentQuestion.question }}</p>

  <select v-model="answer">
    <option disabled value>Choose an answer</option>
    <option v-for="answerOption in answerOptions" :key="answerOption">{{ answerOption }}</option>
  </select>

  <button id="nextQuestion" 
  @click="nextQuestion"
  v-if="!finishedLastQuestion"
  >Next question</button>

  <button v-if="finishedLastQuestion">Check answers</button>
</template>

<style scoped>
</style>