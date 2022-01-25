import { createStore } from 'vuex'
import { getCategories } from './api/category'

export default createStore({
    state: {
        user: {
            username: '',
            highScore: 0
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
        answers: [],
        categories: [],

        // These are for generating the API link, getting the questions.
        selectedCategory: {},
        selectedDifficulty: "",
        selectedNumberOfQuestions: "",

    },
    actions: {
        async fetchAllCategories() {
            try {
                const [error, categories] = await getCategories();
                if (error !== null) {
                    throw new Error(error);
                }
                this.commit("setCategories", categories);
                // console.log(categories);
                return null;
            } catch (error) {
                return error.message;
            }
        }

    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload;
        },
        setQuestions: (state, payload) => {
            state.questions = payload;
        },
        addAnswer: (state, payload) => {
            state.answers.push(payload);
        },
        setCategories: (state, payload) => {
            state.categories = payload;
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
        user: (state) => {
            return state.user
        },
        getQuestions: (state) => {
            return state.questions
        },
        answers: (state) => {
            return state.answers
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