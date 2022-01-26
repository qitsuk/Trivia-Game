import { createStore } from 'vuex'
import { getCategories } from './api/category'
import { getQuestions } from './api/questions';
import { apiUserGet, apiUserPatch, apiUserPost } from './api/users';

//store with state, actions, mutations, and getters. State contains info about current user, their game settings and answers, as well as the 
    //current questions + all available categories
export default createStore({
    state: {
        user: {
            username: '',
            highScore: 0,
            id: ''
        },
        questions: [],
        categories: [],

        // These are for generating the API link, getting the questions.
        selectedCategory: '',
        selectedDifficulty: "",
        selectedNumberOfQuestions: "",
        userAnswers: [],
        categories: []

    },
    actions: {
        //calls api to get questions
        async getQuestions() {
            try {
                const [error, questions] = await getQuestions();
                if (error !== null) {
                    throw new Error(error);
                }
                this.commit("setQuestions", questions.results);
                return null;
            } catch (error) {
                return error.message;
            }
        },
        //calls api to get trivia categories
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
        //calls api to get user from database
        async getUserFromApi({commit, state}){
            try {
                const foundUser = await apiUserGet(state.user.username);
                return foundUser
            } catch (error) {
                return error.message
            }
        },
        //calls api to post user to database
        async postHighScoreToApi({commit, state}){
            try {
                const response = await apiUserPost(state.user.username, state.user.highScore)
                return response
            } catch (error) {
                return error.message
            }
        },
        //calls api to patch user to database
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
        //resets relevant state when user wants to start from scratch
        setDefaultRestart: (state) => {
            state.user = {}
             state.selectedCategory = {}
             state.selectedDifficulty = ''
             state.selectedNumberOfQuestions = ''
             state.userAnswers = []
             state.questions = []
        },
        //resets relevant state when user wants to replay with same settings
        setDefaultReplay: (state) => {
            state.questions = []
            state.userAnswers = []
        },
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
        //extracts an array of the correct answers to all loaded questions
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