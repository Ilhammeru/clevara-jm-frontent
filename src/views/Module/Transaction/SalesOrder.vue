<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Sales Order</p>
            </div>

            <Search placeholder="Search for categories" isSales="true" />

            <div class="card jm_card card_sales_order">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table jm_table">
                            <thead>
                                <tr>
                                    <th>No. SO</th>
                                    <th>No. Order</th>
                                    <th>Tanggal</th>
                                    <th>Jatuh Tempo</th>
                                    <th>Customer</th>
                                    <th>Produk</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in sales" :key="item.id" @click.prevent="detail(item.id)">
                                    <td class="sales_so">{{ item.so }}</td>
                                    <td>{{ item.invoice }}</td>
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.duedate }}</td>
                                    <td class="customer_name">
                                        <p class="customer_name_text">{{ item.customer }}</p>
                                        <p class="customer_name_type">{{ item.type }}</p>
                                    </td>
                                    <td class="product_name">
                                        <p class="product_name_text">{{ item.product[0].name }}</p>
                                        <p class="product_name_helper" v-show="item.product.length > 0">+1 produk lainnya</p>
                                    </td>
                                    <td>{{ item.total }}</td>
                                    <td>
                                        <button class="btn_status">
                                            {{ item.status }}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "SalesOrder",
    components: {
        Search
    },
    data() {
        return {
            sales: [
                {id: 1, so: '#SO/1/2110/0327', invoice: '046/TKL/TJS/21', date: '11-08-2022', duedate: '20-09-2022', customer: 'Binamitra Handaya Perkasa, PT', type: 'contractor', product: [
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'},
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'}
                ], total: '71,935,920', status: 'Menunggu Pembayaran'},
                {id: 2, so: '#SO/1/2110/0327', invoice: '046/TKL/TJS/21', date: '11-08-2022', duedate: '20-09-2022', customer: 'Binamitra Handaya Perkasa, PT', type: 'contractor', product: [
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'},
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'}
                ], total: '71,935,920', status: 'Menunggu Pembayaran'},
                {id: 3, so: '#SO/1/2110/0327', invoice: '046/TKL/TJS/21', date: '11-08-2022', duedate: '20-09-2022', customer: 'Binamitra Handaya Perkasa, PT', type: 'contractor', product: [
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'},
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'}
                ], total: '71,935,920', status: 'Menunggu Pembayaran'},
                {id: 4, so: '#SO/1/2110/0327', invoice: '046/TKL/TJS/21', date: '11-08-2022', duedate: '20-09-2022', customer: 'Binamitra Handaya Perkasa, PT', type: 'contractor', product: [
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'},
                    {id: 1, name: 'Tee Las SCH 20 Stainless SS'}
                ], total: '71,935,920', status: 'Menunggu Pembayaran'},
            ]
        }
    },
    methods: {
        detail(id) {
            this.$router.push('/order/' + id)
        }
    }
}
</script>

<style lang="scss" scoped>
table tbody tr {
    cursor: pointer;
}

.sales_so {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}

.customer_name {
    &_text {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #212121;
        text-transform: capitalize;
        margin-bottom: 4px;
    }

    &_type {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #6C6C6C;
        text-transform: capitalize;
    }
}

.product_name_helper {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 160%;
    letter-spacing: -0.005em;
    color: #6C6C6C;
    text-transform: capitalize;
}

.btn_status {
    background: #F4F4F4;
    border-radius: 10px;
    padding: 4px 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #212121;
    border: none;

    &:focus {
        box-shadow: none;
    }
}

@media all and (min-width: 1113px) and (max-width: 1300px) {
    .table-responsive {
        overflow-x: auto;

        table.table {
            width: 150%;
        }
    }
}
</style>