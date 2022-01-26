<script setup>
import StartScreenForm from "../components/StartScreen/StartScreenForm.vue";
import { useRouter } from "vue-router";

//view for the setup part of the website
//StartScreenForm component handles user input

//vue setup
const router = useRouter();

//handler for startbutton. brings user to QuestionScreen view.
const handleOnStartClicked = () => {
  router.push("questions");
}

</script>

<template>
  <div class="h-screen flex justify-center items-center border-orange-600 border-8">
    <StartScreenForm @onStartClicked="handleOnStartClicked"/>
  </div>
</template>

<style scoped>
</style>