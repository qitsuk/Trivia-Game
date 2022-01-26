<script setup>
import ReplayReturn from '../components/Results/ReplayReturn.vue';
import ScoreAnswers from '../components/Results/ScoreAnswers.vue';

//view for the results part of the website
// has a replayreturn component to play more rounds of Trivia
// has a ScoreAnswers component to show results



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