const state = {
    listProduct: []
};
const getters = {
    listProduct(state) {
        return state.listProduct
    }
};
const mutations = {
    SET_PRODUCT: (state, payload) => {
        state.listProduct = payload
    }
};
const actions = {
    getProduct(context) {
        var data = [
            { id: 1, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 2, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 3, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 4, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 5, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 6, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 7, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 8, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true },
            { id: 9, name: 'Pompa Wasser Sumur Dalam PC - 280EA', merk: 'Wasser Pump', supplier: 'Aditya Sarana Graha, PT', weight: '800000', dimension: '60X10X20', COGS: '5796000', retailPrice: '7119000', contractorPrice: '5796000', statusReview: true }
        ]

        context.commit('SET_PRODUCT', data)
    }
};

export default {
    namespaced: true,
    actions,
    getters,
    state,
    mutations
};