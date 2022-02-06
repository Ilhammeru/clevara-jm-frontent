<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Detail Laba Rugi</p>
            </div>

            <Search placeholder="Search for categories" :isSales="true" />
        
            <div class="card jm_card card_detail_pnl">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Detail Pendapatan</p>
                    </div>

                    <table class="table jm_table table_detail_income">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Supplier</th>
                                <th>Qty</th>
                                <th>Harga</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in detailIncome" :key="item.id">
                                <td class="income_name">{{ item.name }}</td>
                                <td>{{ item.supplier }}</td>
                                <td>{{ item.qty }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.total }}</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="income_total">Total Pendapatan</td>
                                <td class="income_total_value">792.625.000</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table jm_table table-other_income">
                        <thead>
                            <tr>
                                <th>Pendaptan Lain</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="income_name">Pendapatan atas biaya retur Tasmania Sejarah oleh Angkasa</td>
                                <td>792.625.000</td>
                            </tr>
                            <tr>
                                <td class="income_name">Pendapatan atas biaya retur Tasmania Sejarah oleh Angkasa</td>
                                <td>792.625.000</td>
                            </tr>
                            <tr>
                                <td class="income_total">Total Pendapatan</td>
                                <td class="income_total_value">792.625.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card jm_card card_detail_pnl">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Detail Biaya</p>
                    </div>

                    <table class="table jm_table table_detail_income">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Supplier</th>
                                <th>Qty</th>
                                <th>Harga</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in detailIncome" :key="item.id">
                                <td class="income_name">{{ item.name }}</td>
                                <td>{{ item.supplier }}</td>
                                <td>{{ item.qty }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.total }}</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="income_total">Total Pendapatan</td>
                                <td class="income_total_value">792.625.000</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table jm_table table-other_income">
                        <thead>
                            <tr>
                                <th>Pendaptan Lain</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="income_name">Pendapatan atas biaya retur Tasmania Sejarah oleh Angkasa</td>
                                <td>792.625.000</td>
                            </tr>
                            <tr>
                                <td class="income_name">Pendapatan atas biaya retur Tasmania Sejarah oleh Angkasa</td>
                                <td>792.625.000</td>
                            </tr>
                            <tr>
                                <td class="income_total">Total Pendapatan</td>
                                <td class="income_total_value">792.625.000</td>
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
    name: "DetailPnL",
    components: {
        Search
    },
    data() {
        return {
            detailIncome: [
                {id: 1, name: 'Vinyl Taco 3mm TV - 019 Victorian Barn', supplier: 'Baharama Permata, PT', qty: 999, price: '768.925.000', total: '768.925.000'},
                {id: 2, name: 'Vinyl Taco 3mm TV - 019 Victorian Barn', supplier: 'Baharama Permata, PT', qty: 1999, price: '768.925.000', total: '768.925.000'},
                {id: 3, name: 'Vinyl Taco 3mm TV - 019 Victorian Barn', supplier: 'Baharama Permata, PT', qty: 999, price: '768.925.000', total: '768.925.000'},
                {id: 4, name: 'Vinyl Taco 3mm TV - 019 Victorian Barn', supplier: 'Baharama Permata, PT', qty: 3999, price: '768.925.000', total: '768.925.000'},
                {id: 5, name: 'Vinyl Taco 3mm TV - 019 Victorian Barn', supplier: 'Baharama Permata, PT', qty: 999, price: '768.925.000', total: '768.925.000'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.card_detail_pnl {
    margin-bottom: 24px;

    .card-body {
        padding: 40px !important;

        .table-other_income {
            margin-top: 40px;

            tbody {
                tr {
                    border: none;

                    td {
                        padding-bottom: 12px;
                        padding-top: 12px;
                    } 

                    .income_name {
                        width: 800px;
                        padding-right: 80px;
                    }

                    .income_total {
                        width: 800px;
                        background: #FAFAFA;
                        padding: 8px 60px;
                        text-align: end;
                    }

                    .income_total_value {
                        background: #FAFAFA;
                        padding: 8px 0;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 140%;
                        letter-spacing: 0.04em;
                        color: #212121;
                    }
                }
            }
        }

        .table_detail_income {
            tbody {
                tr {
                    border: none;
                    td {
                        padding-bottom: 24px;
                        padding-top: 24px;
                    } 

                    .income_name {
                        width: 250px;
                        padding-right: 80px;
                    }

                    .income_total {
                        background: #FAFAFA;
                        padding: 8px 60px;
                        text-align: end;
                    }

                    .income_total_value {
                        background: #FAFAFA;
                        padding: 8px 0;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 140%;
                        letter-spacing: 0.04em;
                        color: #212121;
                    }
                }
            }
        }
    }
}
</style>