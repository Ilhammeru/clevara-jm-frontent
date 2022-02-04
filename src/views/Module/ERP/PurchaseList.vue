<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Monitoring PO</p>
                <div class="button_add_group">
                    <button class="btn jm_green jm_btn button_add_group_manual" @click.prevent="create">Buat PO Manual</button>
                    <button class="btn jm_green jm_btn button_add_group_direct" @click.prevent="create">Buat PO Langsung</button>
                </div>
            </div>

            <Search placeholder="Search for PO" :isSales="true"/>

            <div class="card jm_card card_purchase">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table jm_table">
                            <thead>
                                <tr>
                                    <th>No. Order</th>
                                    <th>Tanggal</th>
                                    <th>Jatuh Tempo</th>
                                    <th>Supplier</th>
                                    <th>Produk</th>
                                    <th>Total</th>
                                    <th>Customer</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in purchase" :key="item.id" @click.prevent="detail(item.id)">
                                    <td class="purchase_no">{{ item.po_number }}</td>
                                    <td class="purchase_date">{{ item.date }}</td>
                                    <td class="purchase_duedate">{{ item.duedate }}</td>
                                    <td class="purchase_supplier">{{ item.supplier }}</td>
                                    <td class="purchase_product">
                                        <p class="purchase_product_text">{{ item.product }}</p>
                                        <p class="purchase_product_duedate">{{ item.duedate }}</p>
                                    </td>
                                    <td class="purchase_total">{{ item.total }}</td>
                                    <td class="purchase_customer">{{ item.customer }}</td>
                                    <td class="purchase_status">
                                        <button class="purchase_status_btn">{{ item.status }}</button>
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
    name: "PurchaseList",
    components: {
        Search
    },
    data() {
        return {
            purchase: [
                {id: 1, po_number: 'PO20210902090827', date: '11-08-2022', duedate: '30-08-2022', supplier: 'Binamitra Handaya Perkasa, PT', product: 'JM/09042021/02', total: '71,925,000', customer: 'Binamitra Handaya Perkasa, PT', status: 'Menunggu Pembayaran'},
                {id: 2, po_number: 'PO20210902090827', date: '11-08-2022', duedate: '30-08-2022', supplier: 'Binamitra Handaya Perkasa, PT', product: 'JM/09042021/02', total: '71,925,000', customer: 'Binamitra Handaya Perkasa, PT', status: 'Menunggu Pembayaran'},
                {id: 3, po_number: 'PO20210902090827', date: '11-08-2022', duedate: '30-08-2022', supplier: 'Binamitra Handaya Perkasa, PT', product: 'JM/09042021/02', total: '71,925,000', customer: 'Binamitra Handaya Perkasa, PT', status: 'Menunggu Pembayaran'},
                {id: 4, po_number: 'PO20210902090827', date: '11-08-2022', duedate: '30-08-2022', supplier: 'Binamitra Handaya Perkasa, PT', product: 'JM/09042021/02', total: '71,925,000', customer: 'Binamitra Handaya Perkasa, PT', status: 'Menunggu Pembayaran'},
                {id: 5, po_number: 'PO20210902090827', date: '11-08-2022', duedate: '30-08-2022', supplier: 'Binamitra Handaya Perkasa, PT', product: 'JM/09042021/02', total: '71,925,000', customer: 'Binamitra Handaya Perkasa, PT', status: 'Menunggu Pembayaran'},
                {id: 6, po_number: 'PO20210902090827', date: '11-08-2022', duedate: '30-08-2022', supplier: 'Binamitra Handaya Perkasa, PT', product: 'JM/09042021/02', total: '71,925,000', customer: 'Binamitra Handaya Perkasa, PT', status: 'Menunggu Pembayaran'},
            ]
        }
    },
    methods: {
        create() {
            this.$router.push('/purchase/create')
        },
        detail(id) {
            this.$router.push('/purchase/detail/' + id)
        }
    }
}
</script>

<style lang="scss" scoped>
.button_add_group {
    &_manual {
        background: transparent !important;
        border: 1px solid #006664 !important;
        color: #006664 !important;
        margin-right: 16px !important;
    }
}

.table {
    tbody {
        tr {
            cursor: pointer;

            .purchase_no {
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 140%;
                letter-spacing: 0.04em;
                color: #006664;
            }

            .purchase_supplier,
            .purchase_customer {
                width: 150px;
                padding-right: 20px;
            }

            .purchase_status {
                &_btn {
                    background: #F4F4F4;
                    border-radius: 10px;
                    border: none;
                    padding: 4px 8px;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 140%;
                    letter-spacing: 0.04em;
                    color: #212121;
                }
            }

            .purchase_product {
                &_text {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 160%;
                    letter-spacing: -0.005em;
                    color: #212121;
                    margin-bottom: 8px !important;
                }

                &_duedate {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 160%;
                    letter-spacing: -0.005em;
                    color: #6C6C6C;
                }
            }
        }
    }
}

@media all and(min-width: 1301px) and (max-width: 1500px) {
    .table-responsive {
        overflow-x: auto;
        
        table {
            width: 120%;

            tbody {
                tr {
                    .purchase_no {
                        width: 150px;
                        padding-right: 30px;
                    }

                    .purchase_supplier,
                    .purchase_customer {
                        width: 140px;
                        padding-right: 20px;
                    }
                }
            }
        }
    }
}
</style>