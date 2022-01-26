//api calls for getting questions based on user-provided parameters
import { computed } from "vue";
import { BASE_TRIVIA_API_URL } from ".";
import store from "../store";
import createRouter from '../router'


const router = createRouter;
// A redirect function to get back to the frontpage if the API returns a code 1
// Code 1: No Results - Could not return results. The API doesn't have enough questions for your query. 
// (Ex. Asking for 50 Questions in a Category that only has 20.)
const returnToStart = () => {
    router.push("/");
}

//user's chosen game settings for use in url
const selectedDifficulty = computed(() => store.getters.getSelectedDifficulty);
const selectedCategory = computed(() => store.getters.getSelectedCategory);
const numberOfQuestions = computed(() => store.getters.getSelectedNumberOfQuestions);


//builds api url based on the above info
export const buildAPIURL = () => {
    const difficulty = selectedDifficulty.value;
    const numOfQuestions = numberOfQuestions.value;
    const category = JSON.parse(JSON.stringify(selectedCategory.value));
    if (category === "0") {
        return `${BASE_TRIVIA_API_URL}.php?amount=${numOfQuestions}&difficulty=${difficulty}`;
    } else {
        const categoryID = category.category.id;
        return `${BASE_TRIVIA_API_URL}.php?amount=${numOfQuestions}&category=${categoryID}&difficulty=${difficulty}`;
    }
}

//api call to get questions
export async function getQuestions() {
    try {
        const response = await fetch(buildAPIURL());
        const result = await response.json();
        if (result.response_code === 1 && response.ok) {
            console.log("The API responded with a code 1");
            router.push("/");
        } else if (response.ok) {
            return [null, result];
        } else {
            throw new Error(error);
        }
    } catch (error) {
        return [error.message, null];
    }
}