<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>kategori produk</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-category>+ kategori baru</button>
            </div>

            <Search placeholder="Search for categories" />

            <div class="card jm_card card_sales_order">
                <div class="card-body">
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
                            <tr v-for="item in sales" :key="item.id">
                                <td>{{ item.so }}</td>
                                <td>{{ item.invoice }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.duedate }}</td>
                                <td class="customer_name">
                                    <p class="customer_name_text">{{ item.customer }}</p>
                                    <p class="customer_name_type">{{ item.type }}</p>
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
    }
}
</script>