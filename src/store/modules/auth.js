const state = {
    authenticated: false,
}

const getters = {
    requestResponse: state => state.response
}

const mutations = {
    setAuthentication(state, status) {
        state.authenticated = status
    }
}

export default {
    state,
    getters,
    mutations,
}