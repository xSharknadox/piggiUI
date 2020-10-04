import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeTab: "home",
        title: "Piggi",
        user: {
            name: "Igor Chernukha"
        },
        isLoggedIn: true,

        colors: [
            {
                name: "red",
                color: "red"
            },
            {
                name: "teal",
                color: "teal"
            },
            {
                name: "indigo",
                color: "indigo"
            },
            {
                name: "orange",
                color: "orange"
            },
            {
                name: "blue",
                color: "blue"
            }
        ]
    },
    mutations: {
        setActiveTab(state, tab) {
            state.activeTab = tab
        }
    },
    actions: {},
    getters: {
        getActiveTab(state) {
            return state.activeTab
        },
        getTitle(state) {
            if (state.isLoggedIn) {
                return state.user.name
            } else {
                return "Piggi"
            }
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        getColors(state) {
            return state.colors
        }
    },
    modules: {}
})
