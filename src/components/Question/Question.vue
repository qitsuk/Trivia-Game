<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// contains a question component for each question in the current game
// ends with button that submits  the answers in all question components
//current version ignores the Question component, might reintroduce it later

//vue setup
const router = useRouter();
const store = useStore();

//vars for tracking questions and answers
const userAnswers = computed(() => store.getters.getUserAnswers);
const questions = computed(() => store.getters.getQuestions);
let userAnswer = ref('');
let answerOptions = reactive([]);
let currentQuestion = ref({});
let currentQuestionNumber = 0;
const buttonText = ref("Next Question");



//sends out an api get request to collect questions based on previous user input parameters
async function setupQuestions() {
  await store.dispatch('getQuestions');
  updateQuestionAndAnswers();
}

//loads question into html when component is mounted
onMounted(() => {
  setupQuestions()
});


//handler for the nextquestion button. Moves to next question if possible, otherwise continues to ResultScreen view.
const nextQuestionButton = () => {
  if (!userAnswer.value) {
    return
  }
  store.commit('addAnswer', userAnswer.value);
  userAnswer.value = '';
  answerOptions.splice(0, answerOptions.length);
  currentQuestionNumber++;
  if (questions.value[currentQuestionNumber + 1] === undefined) {
    buttonText.value = "Results";
  }
  if (questions.value[currentQuestionNumber] === undefined) {
    router.push('results');
  } else {
    updateQuestionAndAnswers();
  }
}


//gets a new question and loads its answer options to be shown on the page
const updateQuestionAndAnswers = () => {
  currentQuestion.value = questions.value[currentQuestionNumber];
  answerOptions.push(currentQuestion.value.correct_answer);
  for (let answerOption in currentQuestion.value.incorrect_answers) {
    answerOptions.push(currentQuestion.value.incorrect_answers[answerOption]);
  }
  answerOptions = answerOptions.sort((a, b) => 0.5 - Math.random());

}
</script>

<template>
  <div class="content-center">
    <p>{{ currentQuestion.question }}</p>

    <select v-model="userAnswer">
      <option disabled value>Choose an answer</option>
      <option v-for="answerOption in answerOptions" :key="answerOption">{{ answerOption }}</option>
    </select>

    <button id="nextQuestion" @click="nextQuestionButton">{{ buttonText }}</button>
  </div>
</template>

<style scoped>
</style>