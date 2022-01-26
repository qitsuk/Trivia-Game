import {createRouter, createWebHistory} from 'vue-router'
const StartScreen = () => import ('./views/StartScreen.vue')
const QuestionScreen = () => import ('./views/QuestionScreen.vue')
const ResultScreen = () => import ('./views/ResultScreen.vue')

//config for vue router
const routes = [
    {
        path: '/',
        component: StartScreen
    },
    {
        path: '/questions',
        component: QuestionScreen
    },
    {
        path: '/results',
        component: ResultScreen
    }
]

export default createRouter({
    history: createWebHistory(
        process.env.NODE_ENV === 'production'
        ? '/assignment-2-trivia/'
        : '/'
    ), 
    routes
})