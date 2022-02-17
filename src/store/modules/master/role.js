const state = {
    detailRole: "",
    listRole: [],
    showRole: [],
    showRole: []
}
const getters = {
    listRole(state) {
        return state.listRole
    },
    showRole(state) {
        return state.showRole
    },
    detailRole(state) {
        return state.detailRole
    }
}
const mutations = {
    SET_ROLE: (state, payload) => {
        state.listRole = payload
        state.showRole = payload
    },
    SET_DETAIL_ROLE: (state, payload) => {
        state.detailRole = payload
    },
    SET_SHOW_ROLE: (state, payload) => {
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
    },
    async getRoleById(context, payload) {
        await this._vm.axios.get('/role/detail/' + payload.id)
        .then((res) => {
            context.commit("SET_DETAIL_ROLE", res.data.data)
        })
        .catch(err => {
            console.log('error detail', err)
        })
    },
    async search(context, payload) {
        let data = context.state.listRole
        let result = []
        const match = data.find(element => {
            if (element.name.includes(payload.value)) {
                result.push(element)
            }
        });
        context.commit("SET_SHOW_ROLE", result)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}