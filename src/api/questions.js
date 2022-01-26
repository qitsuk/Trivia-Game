import { computed } from "vue";
import { BASE_TRIVIA_API_URL } from ".";
import store from "../store";
import { useRouter } from 'vue-router';

const router = useRouter();
const returnToStart = () => {
    router.push("/");
}

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
        if (result.response_code === 1 && response.ok) {
            console.log("The API responded with a code 1");
            returnToStart();
        } else if (result.reponse_code === 0 && response.ok) {
            return [null, result];
        } else {
            throw new Error(error);
        }
    } catch (error) {
        return [error.message, null];
    }
}