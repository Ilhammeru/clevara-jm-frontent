<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Master File</p>
            </div>

            <Search placeholder="Search for categories" :isSales="true" />

            <div class="card jm_card card_master">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table jm_table table_master">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Tanggal</th>
                                    <th>Customer</th>
                                    <th>Jenis Customer</th>
                                    <th>Jatuh Tempo</th>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>No. Po</th>
                                    <th>Pemasok</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in master" :key="item.id">
                                    <td>{{ item.invoice }}</td>
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.customer }}</td>
                                    <td class="customer_type">
                                        <span class="customer_type_text">{{ item.customerType }}</span>
                                    </td>
                                    <td>{{ item.duedate }}</td>
                                    <td class="master_item">{{ item.item }}</td>
                                    <td class="master_qty">{{ item.qty }}</td>
                                    <td>{{ item.invoiceNo }}</td>
                                    <td>{{ item.supplier }}</td>
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
    name: "Master",
    components: {
        Search
    },
    data() {
        return {
            master: [
                {id: 1, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 2, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 3, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 4, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 5, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 6, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 7, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 8, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 9, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'},
                {id: 10, date: '11-08-2022', invoice: '#SO/1/2110/0327', customer: 'Inti Gilang Sakama, PT', customerType: 'Project', duedate: '11-08-2022', item: 'Vinyl Taco 3mm TV - 019 Victorian Barn', qty: '99', invoiceNo: '046/TKL/TJS/21', supplier: 'Inti Gilang Sakama, PT'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.table-responsive {
    overflow-x: auto;

    .table_master {
        width: 120%;

        tbody {
            tr {
                .customer_type {
                    &_text {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 12px;
                        line-height: 140%;
                        letter-spacing: 0.04em;
                        color: #212121;
                        background: #F4F4F4;
                        border-radius: 10px;
                        padding: 4px 8px;
                    }
                }

                .master_item {
                    width: 200px;
                    padding-right: 30px;
                }

                .master_qty {
                    padding-right: 30px;
                    width: 80px;
                }
            }
        }
    }
}
</style>