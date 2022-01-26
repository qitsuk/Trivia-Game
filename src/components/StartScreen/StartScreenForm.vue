<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import store from '../../store';
import { useRouter } from 'vue-router';


//click handler emit
const emit = defineEmits(["onStartClicked"]);

//vue setup
const router = useRouter();


//vars for tracking user input about username and game settings
const categoryNames = ref([]);
const username = ref("");
const difficulty = ref("");
const selectedCategory = ref("");
const numberOfQuestions = ref(0);


//gets available categories from api and loads them to use in html
const loadCategories = async () => {
    await store.dispatch("fetchAllCategories");
    const categories = computed(() => store.getters.getAllCategories);
    for (let category of categories.value) {
        let categoryObj = {};
        categoryObj.text = category.name;
        categoryObj.id = category.id;
        categoryNames.value.push(categoryObj);
    }
    categoryNames.value.sort();
}

//call to load categories
loadCategories();


//handler for the startclick button. First checks if all necessary input has been given, then commits relevant values to the store and routes to QuestionScreen
const onStartClick = () => {
    if (difficulty.value === "" || (numberOfQuestions.value <= 0 || numberOfQuestions.value > 50) || username.value === "") {
        alert("Something is wrong here. Remember to choose a difficulty and request at least 1 question and no more than 50. Also, you have to set your username, so we can keep track of your highscore.");
    } else {
        store.commit("setSelectedCategory", selectedCategory.value);
        store.commit("setSelectedDifficulty", difficulty.value);
        store.commit("setSelectedNumberOfQuestions", numberOfQuestions.value);
        emit("onStartClicked");
        store.commit("setUsername", username.value);
        router.push('questions');
    }
};

</script>

<template>
    <form>
        <h1 class="text-3xl p-4 flex justify-center">
            <b>Welcome to our Trivia Game</b>
        </h1>
        <fieldset>
            <div class="grid gap-4">
                <div class="flex justify-center border-4 border-rose-500 p-4">
                    <label for="username" class="p-3">
                        <b>What is your username?</b>
                    </label>
                    <br />
                    <input
                        class="border-slate-800"
                        type="text"
                        id="username"
                        placeholder="Your username here"
                        v-model="username"
                    />
                    <br />
                </div>
                <div class="flex justify-center border-4 border-green-600 p-3">
                    <label for="difficulty" class="p-2">
                        <b>Choose your difficulty:</b>
                    </label>
                    <br />
                    <select id="difficulty-select" v-model="difficulty" class="p-2">
                        <option disabled value selected>Choose here</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <br />
                </div>
                <div
                    class="align-middle items-center border-4 border-indigo-800 p-3 flex justify-center"
                >
                    <label for="category" class="p-3">
                        <b class="p-3">Select a Category:</b>
                    </label>
                    <br />
                    <select id="category-select" v-model="selectedCategory" class="p-2">
                        <option
                            id="allCategories"
                            value="0"
                            selected="selected"
                        >Questions from ALL Categories</option>
                        <option
                            v-for="category of categoryNames"
                            :key="category.id"
                            :value="{ category }"
                        >{{ category.text }}</option>
                    </select>
                    <br />
                </div>
                <div class="flex justify-center p-3 border-4 border-cyan-500">
                    <label for="numberOfQuestions" class="p-2">
                        <b>How many questions would you like?</b>
                    </label>
                    <br />
                    <input
                        type="number"
                        v-model.number="numberOfQuestions"
                        placeholder="Enter number of questions"
                    />
                    <br />
                </div>
                <div class="flex justify-center">
                    <button
                        type="button"
                        @click="onStartClick"
                        class="bg-lime-700 rounded-md p-4"
                    >Start The Game!</button>
                </div>
            </div>
        </fieldset>
    </form>
</template>

<style>
</style>