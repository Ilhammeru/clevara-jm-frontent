const state = {
    isLoading: false,
    isLogin: false,
    errorForm: false,
    errorInput: ""
}
const getters = {
    isLogin(state) {
        return state.isLogin
    },
    isLoading(state) {
        return state.isLoading
    },
    errorForm(state) {
        return state.errorForm
    },
    errorInput(state) {
        return state.errorInput
    }
}
const mutations = {
    CLEAR_ERROR: (state) => {
        state.errorForm = false
        state.errorInput = ""
    },
    SET_ERROR: (state, payload) => {
        state.errorForm = true
        state.errorInput = payload
    },
    SET_LOADING: (state, payload) => {
        state.isLoading = payload
    },
    SET_LOGIN: (state, payload) => {
        state.isLogin = payload
    }
}
const actions = {
    clearError(context) {
        context.commit("CLEAR_ERROR")       
    },
    setError(context, payload) {
        context.commit("SET_ERROR", payload)
    },
    setLoading(context, payload) {
        context.commit("SET_LOADING", payload)
    },
    setLogin(context, payload) {
        context.commit("SET_LOGIN", payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};