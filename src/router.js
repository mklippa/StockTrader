import Vue from "vue";
import Router from "vue-router"
import Home from "./components/Home.vue"
import Stock from "./components/Stock.vue"
import Portfolio from "./components/Portfolio.vue"
import Stocks from "./components/Stocks.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/stock',
            name: 'stock',
            component: Stock
        },
        {
            path: '/stocks',
            name: 'stocks',
            component: Stocks
        },
        {
            path: '/protfolio',
            name: 'portfolio',
            component: Portfolio
        }
    ]
})