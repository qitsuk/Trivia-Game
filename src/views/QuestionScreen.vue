<script setup>
import {computed, ref} from 'vue'
import Question from '../components/Question/Question.vue';
import { useStore } from 'vuex';

// contains a question component for each question in the current game
// ends with button that submits  the answers in all question components

//note fra opgaven: " The app must ONLY display ONE question at a time.""
const store = useStore()
const questions = computed(() => store.state.questions)


</script>

<template>
  <h1>question screen!</h1>

  <Question></Question>
  <!-- ^will show a sequence of the above component programatically //consider how much of this goes in Question component -->
  

</template>

<style scoped>

</style>