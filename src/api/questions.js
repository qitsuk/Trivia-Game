import { computed } from "vue";
import { BASE_TRIVIA_API_URL } from ".";
import store from "../store";


const selectedDifficulty = computed(() => store.getters.getSelectedDifficulty);
const selectedCategory = computed(() => store.getters.getSelectedCategory);
const numberOfQuestions = computed(() => store.getters.getSelectedNumberOfQuestions);

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


export async function getQuestions() {
    try {
        const response = await fetch(buildAPIURL());
        const result = await response.json();
        if (response.ok) {
            return [null, result];
        } else {
            throw new Error(error);
        }
    } catch (error) {
        return [error.message, null];
    }
}
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy


// https://opentdb.com/api.php?amount=12&category=12&difficulty=normal

// https://opentdb.com/api.php?amount=10&category=11&difficulty=medium