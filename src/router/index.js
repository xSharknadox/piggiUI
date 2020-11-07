import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Freezer from '../views/Freezer.vue'
import Recipes from '../views/Recipes.vue'
import Tables from '../views/Tables.vue'
import ProductsMenu from '../views/ProductsMenu.vue'
import CategoryProducts from '../views/CategoryProducts.vue'
import CategoryRecipes from '../views/CategoryRecipes.vue'
import Recipe from '../views/Recipe.vue'
import Freezers from '../views/Freezers.vue'
import Table from '../views/Table.vue'
import store from '../store/index'


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
        component: Freezer,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/recipes',
        name: 'Recipes',
        component: Recipes,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables',
        name: 'Tables',
        component: Tables,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/productsMenu',
        name: 'Products menu',
        component: ProductsMenu,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/categoryProducts',
        name: 'Category products',
        component: CategoryProducts,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/categoryRecipes',
        name: 'Category recipes',
        component: CategoryRecipes,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/recipe',
        name: 'Recipe',
        component: Recipe,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/freezers',
        name: 'Freezers',
        component: Freezers,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/table',
        name: 'Table',
        component: Table,
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router
