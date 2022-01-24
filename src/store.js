import {createStore} from 'vuex'

export default createStore({
    state: {
        user: {
            username: '',
            highScore: 0
        },
        questions: []

    },
    actions: {

    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload
        }
    }
})