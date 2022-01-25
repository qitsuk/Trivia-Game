import { computed } from "vue";
import { BASE_TRIVIA_API_URL } from ".";
import store from "../store";


const selectedDifficulty = computed(() => store.getters.getSelectedDifficulty);
const selectedCategory = computed(() => store.getters.getSelectedCategory);
const numberOfQuestions = computed(() => store.getters.getSelectedNumberOfQuestions);


export const displayOutput = () => {
    console.log("Difficulty: ", selectedDifficulty.value, "Category: ", selectedCategory.value.text, "nr of questions: ", numberOfQuestions.value);
} //ISSUE selectedcategory has no .id due to conversion in startscreenform to objects without id

export async function getQuestions() {
    try {
        const response = await fetch(`${BASE_TRIVIA_API_URL}.php`);
        const { trivia_questions, error = "Something went wrong" } = await response.json();
        if (response.ok) {
            return [null, trivia_questions];
        } else {
            throw new Error(error);
        }
    } catch (error) {
        return [error.message, null];
    }
}
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
