import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "@/router";
// import baseApi from "../baseApi";

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        login({commit}, user) {

            return new Promise((resolve, reject) => {
                commit('authRequest')
                axios.post('/api/auth/sign_in', user)
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        const isLoggined = true
                        localStorage.setItem('token', token)
                        localStorage.setItem('isLoggedIn', isLoggined)
                        localStorage.setItem('user', JSON.stringify(user))
                        axios.defaults.headers.common['Authorization'] = token
                        commit('authSuccess', {token, user, isLoggined})
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('authError')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },

        register({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('registerRequest')
                axios.post('/api/auth/sign_up', user)
                    .then(resp => {
                        commit('registerSuccess')
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('registerError')
                        reject(err)
                    })
            })
        },

        logout({commit}) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
    },

    mutations: {
        authRequest(state) {
            state.status = 'loading'
        },
        authSuccess(state, payload) {
            state.token = payload.token
            state.user = payload.user
            state.isLoggedIn = payload.isLoggined
            state.status = 'success'
        },
        authError(state) {
            state.status = 'error'
            state.isLoggedIn = false
            localStorage.removeItem('isLoggedIn')
        },

        registerRequest(state) {
            state.registerStatus = 'loading'
        },
        registerSuccess(state) {
            state.registerStatus = "success"
        },
        registerError(state) {
            state.registerStatus = "error"
        },
        registerClearData(state) {
            state.registerStatus = ""
        },

        logout(state) {
            state.status = ''
            state.token = ''
            state.isLoggedIn = false
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user')
            router.push("/login")
        },

        setActiveTab(state, tab) {
            state.activeTab = tab
        }
    },

    getters: {
        getActiveTab(state) {
            return state.activeTab
        },
        getTitle(state) {
            if (state.isLoggedIn) {
                return JSON.parse(localStorage.getItem('user')).username
            } else {
                return state.title
            }
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        getColors(state) {
            return state.colors
        }
    },

    state: {
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || {},
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
        title: "Piggi",
        status: "",

        registerStatus: "",
        activeTab: "home",

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
    modules: {}
})
