import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Freezer from '../views/Freezer.vue'
import Recipes from '../views/Recipes.vue'
import Tables from '../views/Tables.vue'
import ProductsMenu from '../views/ProductsMenu.vue'
import CategoryProducts from '../views/CategoryProducts.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/freezer',
        name: 'Freezer',
        component: Freezer
    },
    {
        path: '/recipes',
        name: 'Recipes',
        component: Recipes
    },
    {
        path: '/tables',
        name: 'Tables',
        component: Tables
    },
    {
        path: '/productsMenu',
        name: 'Products menu',
        component: ProductsMenu
    },
    {
        path: '/categoryProducts',
        name: 'Category products',
        component: CategoryProducts
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
