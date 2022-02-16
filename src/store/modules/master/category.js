const state = {
    listCategory: [],
    showCategory: []
}
const getters = {
    listCategory(state) {
        return state.listCategory
    },
    showCategory(state) {
        return state.showCategory
    }
}
const mutations = {
    SET_CATEGORY: (state, payload) => {
        state.listCategory = payload.data.results
        state.showCategory = payload.data.results
    },
    SET_SHOW_CATEGORY: (state, payload) => {
        state.showCategory = payload
    }
}
const actions = {
    async getAll(context) {
        await this._vm.axios.get("/category")
        .then((res) => {
            context.commit("SET_CATEGORY", res.data)
            context.commit("SET_SHOW_CATEGORY", res.data.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    },
    async save(context, payload) {
        await this._vm.axios.post('/category', payload)
        .then((res) => {
            console.log(res)
        })
        .catch(err => {
            let error = err.response.data.message
            context.rootState.general.errorForm = true
            context.rootState.general.errorInput = error
        })
    },
    async update(context, payload) {
        await this._vm.axios.patch('/category/' + payload.id, payload.param)
        .then((res) => {
            console.log(res)
        })
        .catch(err => {
            let error = err.response.data.message
            context.rootState.general.errorForm = true
            context.rootState.general.errorInput = error
        })
    },
    async deleteItem(context, payload) {
        await this._vm.axios.delete('/category/' + payload.id)
        .then((res) => {
            console.log('delete success', res)
            
        })
        .catch(err => {
            console.log('error delete', err.response)
        })
    },
    async search(context, payload) {
        let data = context.state.listCategory
        let result = []
        const match = data.find(element => {
            if (element.name.includes(payload.value)) {
                result.push(element)
            }
        });
        context.commit("SET_SHOW_CATEGORY", result)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}