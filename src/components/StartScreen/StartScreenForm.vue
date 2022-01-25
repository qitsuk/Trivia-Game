<script setup>
import { getCategories } from '../../api/category';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import store from '../../store';

const categoryNames = ref([]);

const username = ref("");
const difficulty = ref("");
const selectedCategory = ref("");
const numberOfQuestions = ref(0);

const loadCategories = async () => {
    await store.dispatch("fetchAllCategories");
    const categories = computed(() => store.getters.getAllCategories);
    for (let category of categories.value) {
        categoryNames.value.push(category.name);
    }
    categoryNames.value.sort();
}
loadCategories();

const onStartClick = () => {
    // store.commit("username")
    store.commit("setSelectedCategory", selectedCategory.value);
    store.commit("setSelectedDifficulty", difficulty.value);
    store.commit("setSelectedNumberOfQuestions", numberOfQuestions.value);
};
</script>

<template>
    <form>
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
                <option value="normal">Normal</option>
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
                    :key="category"
                    :value="{ text: category }"
                >{{ category }}</option>
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