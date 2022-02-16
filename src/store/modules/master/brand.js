const state = {
    listBrand: [],
    showBrand: []
}
const getters = {
    listBrand(state) {
        return state.listBrand
    },
    showBrand(state) {
        return state.showBrand
    }
}
const mutations = {
    SET_BRAND: (state, payload) => {
        state.listBrand = payload
        state.showBrand = payload
    },
    SET_SHOW_BRAND: (state, payload) => {
        state.showBrand = payload
    }
}
const actions = {
    async getAll(context, payload) {
        await this._vm.axios.get('/brand?page='+ payload.page +'&count=' + payload.count)
        .then((res) => {
            console.log(res)
            context.commit("SET_BRAND", res.data.data.results)
        })
    },
    async save(context, payload) {
        await this._vm.axios.post('/brand', payload)
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
        await this._vm.axios.patch('/brand/' + payload.id, payload.param)
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
        await this._vm.axios.delete('/brand/' + payload.id)
        .then((res) => {
            console.log('delete success', res)
            
        })
        .catch(err => {
            console.log('error delete', err.response)
        })
    },
    async search(context, payload) {
        let data = context.state.listBrand
        let result = []
        const match = data.find(element => {
            if (element.name.includes(payload.value)) {
                result.push(element)
            }
        });
        context.commit("SET_SHOW_BRAND", result)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}