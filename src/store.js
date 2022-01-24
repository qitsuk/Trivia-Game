import {createStore} from 'vuex'

export default createStore({
    state: {
        user: {
            username: '',
            highScore: 0
        },
        questions: ['testq1', 'testq2'],
        answers: []
    },
    actions: {

    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload
        },
        setQuestions: (state, payload) => {
            state.questions = payload
        },
        addAnswer: (state, payload) => {
            state.answers.push(payload)
        }
    },
    getters: {
        user: (state) => {
            return state.user
        },
        questions: (state) => {
            return state.questions
        },
        answers: (state) => {
            return state.answers
        }
    }

})