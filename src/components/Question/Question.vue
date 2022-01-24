

<script setup>
import { useStore } from 'vuex';
import {computed, ref} from 'vue'
//includes 1 question and its associated 2 (true/false) or 4 (multiple choice) answer options as radio buttons
//nr of answer options can be handled programatically using v-if and v-else checking for the type of question
//user input should be connected to "answers" variable in vue x store using v-model.

const store = useStore()
let answer = ref('')
const answers = computed(() => store.state.answers)

//handler for the nextquestion button
const nextQuestion = () => {
  store.commit('addAnswer', answer.value)
}

</script>
<template>
    <h3>question and answer options component</h3>
    <button id="nextQuestion" @click="nextQuestion">Next question</button>

  <input
    v-model.lazy="answer"
    type="text"
    />
    <button style="visibility:hidden">Check answers</button>

</template>

<style scoped>

</style>