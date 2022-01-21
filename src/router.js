import {createRouter, createWebHistory} from 'vue-router'
const StartScreen = () => import ('./views/StartScreen.vue')
const QuestionScreen = () => import ('./views/QuestionScreen.vue')
const ResultScreen = () => import ('./views/ResultScreen.vue')


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
    history: createWebHistory(),
    routes
})