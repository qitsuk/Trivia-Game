<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import store from '../../store';
import { useRouter } from 'vue-router';

const emit = defineEmits(["onStartClicked"]);

const router = useRouter()
const categoryNames = ref([]);

const username = ref("");
const difficulty = ref("");
const selectedCategory = ref("");
const numberOfQuestions = ref(0);

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
loadCategories();

const onStartClick = () => {
    store.commit("setSelectedCategory", selectedCategory.value);
    store.commit("setSelectedDifficulty", difficulty.value);
    store.commit("setSelectedNumberOfQuestions", numberOfQuestions.value);
    console.log("Values committed! Hopefully");
    emit("onStartClicked");
    store.commit("setUsername", username.value)
    router.push('questions')
};

// const testQuestionsApi = async () => {
//     await store.dispatch('getQuestions');
//     console.log('got questions');
// }
</script>

<template>
    <form>
        <!-- <button @click="testQuestionsApi">TEST questions api</button> -->
        <h1>Welcome to our Trivia Game</h1>
        <fieldset>
            <label for="username" class="label-style">
                <b>What is your username?</b>
            </label>
            <br />
            <input type="text" id="username" placeholder="Your username here" v-model="username" />
            <br />
            <label for="difficulty" class="label-style">
                <b>Choose your difficulty:</b>
            </label>
            <br />
            <select id="difficulty-select" v-model="difficulty">
                <option disabled value selected>Choose here</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <br />
            <label for="category" class="label-style">
                <b>Select a Category:</b>
            </label>
            <br />
            <select id="category-select" v-model="selectedCategory">
                <option id="allCategories" value="">Questions from ALL Categories</option>
                <option
                    v-for="category of categoryNames"
                    :key="category.id"
                    :value="{ category }"
                >{{ category.text }}</option>
            </select>
            <br />
            <label for="numberOfQuestions" class="label-style">
                <b>How many questions would you like?</b>
            </label>
            <br />
            <input
                type="number"
                v-model.number="numberOfQuestions"
                placeholder="Enter number of quesitons"
            />
            <br />
            <button type="button" @click="onStartClick">Start The Game!</button>
        </fieldset>
    </form>
</template>

<style>
.label-style {
    font-size: larger;
}
</style>