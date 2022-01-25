import { computed } from "vue";
import { BASE_TRIVIA_API_URL } from ".";
import store from "../store";


const difficulty = computed(() => store.getters.getSelectedDifficulty);
const selectedCategory = computed(() => store.getters.getSelectedCategory);
const numberOfQuestions = computed(() => store.getters.getSelectedNumberOfQuestions);


export const displayOutput = () => {
    console.log("Difficulty: ", difficulty.value, "Category: ", selectedCategory.value.text, "nr of questions: ", numberOfQuestions.value);
}