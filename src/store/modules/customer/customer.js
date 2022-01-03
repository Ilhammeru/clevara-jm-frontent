const state = {
    customer: [],
    customerApproval: [],
    customerDetail: ""
};
const getters = {
    customer(state) {
        return state.customer;
    },
    customerApproval(state) {
        return state.customerApproval;
    },
    customerDetail(state) {
        return state.customerDetail;
    }
};
const mutations = {
    SET_CUSTOMER: (state, payload) => {
        state.customer = payload;
    },
    SET_APPROVAL: (state, payload) => {
        state.customerApproval = payload;
    },
    SET_DETAIL: (state, payload) => {
        state.customerDetail = payload;
    }
};
const actions = {
    getCustomer(context) {
        var data = [
            {
                id: 1,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'retail',
                sales: '-',
                npwp: '',
                nib: '',
                sppkp: ''
            },
            {
                id: 2,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'contractor',
                sales: '-',
                npwp: '1233DKDH13',
                nib: 'NIB',
                sppkp: 'SPPKP'
            },
            {
                id: 3,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'contractor',
                sales: '-',
                npwp: '1233DKDH13',
                nib: 'NIB',
                sppkp: 'SPPKP'
            },
            {
                id: 4,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'retail',
                sales: '-',
                npwp: '',
                nib: '',
                sppkp: ''
            },
            {
                id: 5,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'retail',
                sales: '-',
                npwp: '',
                nib: '',
                sppkp: ''
            },
        ];
        context.commit("SET_CUSTOMER", data);
    },
    getCustomerApproval(context) {
        var data = [
            {
                id: 1,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'retail',
                sales: '-',
                npwp: '',
                nib: '',
                sppkp: ''
            },
            {
                id: 2,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'contractor',
                sales: '-',
                npwp: '1233DKDH13',
                nib: 'NIB',
                sppkp: 'SPPKP'
            },
            {
                id: 3,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'contractor',
                sales: '-',
                npwp: '1233DKDH13',
                nib: 'NIB',
                sppkp: 'SPPKP'
            },
            {
                id: 4,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'retail',
                sales: '-',
                npwp: '',
                nib: '',
                sppkp: ''
            },
            {
                id: 5,
                name: 'Inti Gilang Sakama, PT',
                email: 'indesignpurchasing@gmail.com',
                type: 'project',
                telp: '081122334455',
                created_at: '2021-07-09 16:09:33',
                type_2: 'retail',
                sales: '-',
                npwp: '',
                nib: '',
                sppkp: ''
            }
        ];
        context.commit("SET_APPROVAL", data);
    },
    detail(context, param) {
        context.commit("SET_DETAIL", param);
    }
};

export default {
    namespaced: true,
    actions,
    getters,
    state,
    mutations
  };