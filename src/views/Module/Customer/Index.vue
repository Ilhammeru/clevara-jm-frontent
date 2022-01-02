<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>daftar customer</p>
                <button class="btn jm_green jm_btn" @click.prevent="createProduct">+ produk baru</button>
            </div>

            <div class="jm_container_search">
                <input type="text" class="jm_container_search_input_default" placeholder="Search for clients, status">

                <div class="jm_container_search_btn_group_default">
                    <button class="btn jm_btn_transparent">Filter Kolom</button>
                    <button class="btn jm_btn_transparent btn_export">Export</button>
                </div>
            </div>

            <div class="card jm_card">
                <div class="card-body custom_card_body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>nama customer</th>
                                <th>email</th>
                                <th class="th_customer_type">tipe</th>
                                <th>no. telepon</th>
                                <th>tanggal daftar</th>
                                <th>referal sales</th>
                                <th>aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in customer" v-bind:key="item.id">
                                <td class="customer_name">{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>
                                    <div class="customer_type">
                                        <span>{{ item.type }}</span>
                                    </div>
                                </td>
                                <td>{{ item.telp }}</td>
                                <td>{{ item.created_at }}</td>
                                <td>{{ item.sales }}</td>
                                <td>
                                    <div class="jm_table_action">
                                        <span>edit</span>
                                        <span>hapus</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Customer",
    methods: {
        createProduct() {
            this.$router.push('/customer/create');
        }
    },
    data() {
        return {
            customer: [
                {
                    id: 1,
                    name: 'Inti Gilang Sakama, PT',
                    email: 'indesignpurchasing@gmail.com',
                    type: 'project',
                    telp: '081122334455',
                    created_at: '2021-07-09 16:09:33',
                    sales: '-'
                },
                {
                    id: 2,
                    name: 'Inti Gilang Sakama, PT',
                    email: 'indesignpurchasing@gmail.com',
                    type: 'project',
                    telp: '081122334455',
                    created_at: '2021-07-09 16:09:33',
                    sales: '-'
                },
                {
                    id: 3,
                    name: 'Inti Gilang Sakama, PT',
                    email: 'indesignpurchasing@gmail.com',
                    type: 'project',
                    telp: '081122334455',
                    created_at: '2021-07-09 16:09:33',
                    sales: '-'
                },
                {
                    id: 4,
                    name: 'Inti Gilang Sakama, PT',
                    email: 'indesignpurchasing@gmail.com',
                    type: 'project',
                    telp: '081122334455',
                    created_at: '2021-07-09 16:09:33',
                    sales: '-'
                },
                {
                    id: 5,
                    name: 'Inti Gilang Sakama, PT',
                    email: 'indesignpurchasing@gmail.com',
                    type: 'project',
                    telp: '081122334455',
                    created_at: '2021-07-09 16:09:33',
                    sales: '-'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_export {
    margin-left: 16px;
}

.customer_name {
    font-style: normal;
    font-weight: bold !important;
    font-size: 14px !important;
    line-height: 140% !important;
    letter-spacing: 0.04em !important;
    color: #006664 !important;
}

.th_customer_type {
    width: 80px;
}

.customer_type {
    padding: 4px 8px 1important;
    background: #F4F4F4;
    border-radius: 10px;
    text-align: center;
    width: 56px;

    span {
        text-transform: capitalize;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #212121;
    }
}

.custom_card_body {
    padding: 40px !important;
}
</style>