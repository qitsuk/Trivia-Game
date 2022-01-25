import { createStore } from 'vuex'
import { getCategories } from './api/category'
import { apiUserGet, apiUserPatch, apiUserPost } from './api/users';
import { computed } from 'vue';

export default createStore({
    state: {
        user: {
            username: '',
            highScore: 0,
            id: ''
        },
        questions: [ //NOTE these questions are test values to use until we can call the opentdb api
            {
                "category": "Entertainment: Books",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Which of the following authors was not born in England? ",
                "correct_answer": "Arthur Conan Doyle",
                "incorrect_answers": ["Graham Greene", "H G Wells", "Arthur C Clarke"]
            }, {
                "category": "Entertainment: Books",
                "type": "multiple",
                "difficulty": "medium",
                "question": "The title of Adolf Hitler&#039;s autobiography &quot;Mein Kampf&quot; is what when translated to English?",
                "correct_answer": "My Struggle",
                "incorrect_answers": ["My Hatred", "My Sadness", "My Desire"]
            }
        ],
        categories: [],

        // These are for generating the API link, getting the questions.
        selectedCategory: {},
        selectedDifficulty: "",
        selectedNumberOfQuestions: "",
        userAnswers: [],
        categories: []

    },
    actions: {
        async getQuestions() {

        },
        async fetchAllCategories() {
            try {
                const [error, categories] = await getCategories();
                if (error !== null) {
                    throw new Error(error);
                }
                this.commit("setCategories", categories);
                return null;
            } catch (error) {
                return error.message;
            }
        },
        async getUserFromApi({commit, state}){
            try {
                const foundUser = await apiUserGet(state.user.username);
                return foundUser
            } catch (error) {
                return error.message
            }
        },
        async postHighScoreToApi({commit, state}){
            try {
                const response = await apiUserPost(state.user.username, state.user.highScore)
                return response
            } catch (error) {
                return error.message
            }
        },
        async patchHighScoreToApi({commit, state}){
            try {
                const response = await apiUserPatch(state.user.id, state.user.highScore)
                return response
            } catch (error) {
                return error.message
            }
        }

    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload;
        },
        setUsername: (state, payload) => {
            state.user.username = payload;
        },
        setHighScore: (state, payload) => {
            state.user.highScore = payload;
        },
        setQuestions: (state, payload) => {
            state.questions = payload;
        },
        addAnswer: (state, payload) => {
            state.userAnswers.push(payload);
        },
        setCategories: (state, payload) => {
            state.categories = payload;
        },
        setUserId: (state, payload) => {
            state.user.id = payload;
        },
        setSelectedCategory: (state, payload) => {
            state.selectedCategory = payload;
        },
        setSelectedDifficulty: (state, payload) => {
            state.selectedDifficulty = payload;
        },
        setSelectedNumberOfQuestions: (state, payload) => {
            state.selectedNumberOfQuestions = payload;
        }
    },
    getters: {
        getUser: (state) => {
            return state.user
        },
        getHighScore: (state) => {
            return state.user.highScore
        },
        getQuestions: (state) => {
            return state.questions.map(question => question)
        },
        getQuestionTitles: (state) => {
            return state.questions.map(question => question.question)
        },
        getUserAnswers: (state) => {
            return state.userAnswers.map(answer => answer)
        },
        getCategories: (state) => {
            return state.categories;
        },
        getCorrectAnswers: (state) => {
            const correctAnswers = []
            for (let question of state.questions){
                correctAnswers.push(question.correct_answer)
            }
            return correctAnswers
        },
        getAllCategories: (state) => {
            return state.categories;
        },
        getSelectedCategory: (state) => {
            return state.selectedCategory;
        },
        getSelectedDifficulty: (state) => {
            return state.selectedDifficulty;
        },
        getSelectedNumberOfQuestions: (state) => {
            return state.selectedNumberOfQuestions
        },
        
    }
})