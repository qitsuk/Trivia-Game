<script setup>
import {ref} from 'vue'
import Question from '../components/Question/Question.vue';

// contains a question component for each question in the current game
// ends with button that submits  the answers in all question components


</script>

<template>
  <h1>question screen!</h1>

  <Question></Question> 
  <!-- ^will show x number of the above component programatically -->
  <button>Check answers</button>

</template>

<style scoped>

</style>