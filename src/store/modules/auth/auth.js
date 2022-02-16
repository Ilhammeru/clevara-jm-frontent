import axios from 'axios'

const state = {
    user: "",
    module: []
}
const getters = {
    user(state) {
        return state.user
    },
    module(state) {
        return state.module
    }
}
const mutations = {
    SET_LOGIN: (state, payload) => {
        console.log('payload set login', payload)
        state.module = payload.data.data.module        
        state.user = payload.data.data.user        
    },
    SET_MODULE: (state, payload) => {
        console.log('payload set module', payload)
        state.module = payload
    }
}
const actions = {
    async login(context, payload) {
        console.log('action payload', payload)
        await this._vm.axios.post('/auth/cms/login', payload)
        .then((res) => {
            console.log(res)
            // set token
            localStorage.setItem('jwt', res.data.data.token)
            localStorage.setItem('module', JSON.stringify(res.data.data.module))
            localStorage.setItem('isLogin', true)
            context.rootState.general.isLogin = true
            context.commit("SET_LOGIN", res)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.data.token
            console.log('context', context)
        }) 
        .catch(err => {
            console.log('error login', err)
            if (err.response.data != undefined) {
                let error = err.response.data.message
                context.rootState.general.errorForm = true
                context.rootState.general.errorInput = error
            }
        })
    },
    async logout(context) {
        await this._vm.axios.get('/auth/logout')
        .then((res) => {
            console.log('logout success', res)
            localStorage.removeItem('jwt')
            localStorage.removeItem('module')
            localStorage.removeItem('isLogin')
        })
        .catch(err => {
            console.log('error logout', err.response)
        })
    },

    setModule(context, payload) {
        context.commit("SET_MODULE", payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}