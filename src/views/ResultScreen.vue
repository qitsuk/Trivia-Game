<script setup>
import ReplayReturn from '../components/Results/ReplayReturn.vue';
import ScoreAnswers from '../components/Results/ScoreAnswers.vue';

//view for the results part of the website
// has a replayreturn component to play more rounds of Trivia
// has a ScoreAnswers component to show results



</script>

<template>
<div class="h-screen flex justify-center border-8 border-violet-800">
  <p>
    <ScoreAnswers></ScoreAnswers>
  </p>
  <p>
    <ReplayReturn></ReplayReturn>
  </p>
  </div>
</template>

<style scoped>

</style>