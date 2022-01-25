<script setup>
import ReplayReturn from '../components/Results/ReplayReturn.vue';
import ScoreAnswers from '../components/Results/ScoreAnswers.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';


// has a replayreturn component to play more rounds of Trivia
// has a ScoreAnswers component to show results
const store = useStore()
const userAnswers = computed(() => store.state.answers)
const questions = computed(() => store.state.questions)


</script>

<template>
  <h1>Here are your results</h1>
    

    
  <p>
    <ScoreAnswers></ScoreAnswers>
  </p>
  <p>
    <ReplayReturn></ReplayReturn>
  </p>
  
</template>

<style scoped>

</style>