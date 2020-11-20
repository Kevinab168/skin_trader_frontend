import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        username: '',
        token: '',
    },
    mutations: {
        setUser(state, {username, token}) {
            state.username = username
            state.token = token
        },
        resetUser(state) {
            state.username = ''
            state.token = ''
        },

    },
    actions: {
        
    }

})