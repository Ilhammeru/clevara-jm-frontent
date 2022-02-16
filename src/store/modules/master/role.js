const state = {
    listRole: [],
    showRole: []
}
const getters = {
    listRole(state) {
        return state.listRole
    },
    showRole(state) {
        return state.showRole
    }
}
const mutations = {
    SET_ROLE: (state, payload) => {
        state.listRole = payload
        state.showRole = payload
    }
}
const actions = {
    async getAll(context, payload) {
        await this._vm.axios.get('/role?page=' + payload.page + '&count=' + payload.count)
        .then((res) => {
            console.log('get role', res)
            context.commit('SET_ROLE', res.data.data.results)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}