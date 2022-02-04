<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Daftar Invoice</p>
            </div>

            <Search placeholder="Search for Invoice"/>

            <table class="table jm_table">
                <thead>
                    <tr>
                        <th>No. Order</th>
                        <th>Tanggal</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in invoice" :key="item.id">
                        <td class="invoice_no">
                            <p class="invoice_no_text">{{ item.invoice }}</p>
                            <p class="invoice_no_duedate">Jatuh Tempo: {{ item.duedate }}</p>
                        </td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.customer }}</td>
                        <td>{{ item.total }}</td>
                        <td class="invoice_status">
                            <button class="invoice_status_btn">{{ item.status }}</button>
                        </td>
                        <td class="invoice_action">
                            <button class="invoice_action_btn">+ Buat PO</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "InvoiceList",
    components: {
        Search
    },
    data() {
        return {
            invoice: [
                {id: 1, invoice: 'JM/09042021/02', date: '11-08-2022', duedate: '11-08-2022', customer: 'Binamitra Handaya Perkasa, PT', total: '71,925,000', status: 'Pembayaran Diterima'},
                {id: 2, invoice: 'JM/09042021/02', date: '11-08-2022', duedate: '11-08-2022', customer: 'Binamitra Handaya Perkasa, PT', total: '71,925,000', status: 'Pembayaran Diterima'},
                {id: 3, invoice: 'JM/09042021/02', date: '11-08-2022', duedate: '11-08-2022', customer: 'Binamitra Handaya Perkasa, PT', total: '71,925,000', status: 'Pembayaran Diterima'},
                {id: 4, invoice: 'JM/09042021/02', date: '11-08-2022', duedate: '11-08-2022', customer: 'Binamitra Handaya Perkasa, PT', total: '71,925,000', status: 'Pembayaran Diterima'},
                {id: 5, invoice: 'JM/09042021/02', date: '11-08-2022', duedate: '11-08-2022', customer: 'Binamitra Handaya Perkasa, PT', total: '71,925,000', status: 'Pembayaran Diterima'},
                {id: 6, invoice: 'JM/09042021/02', date: '11-08-2022', duedate: '11-08-2022', customer: 'Binamitra Handaya Perkasa, PT', total: '71,925,000', status: 'Pembayaran Diterima'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.table {
    tbody {
        tr {
            .invoice_no {
                &_text {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 160%;
                    letter-spacing: -0.005em;
                    color: #212121;
                }
            
                &_duedate {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 160%;
                    letter-spacing: -0.005em;
                    color: #6C6C6C;
                    margin-top: 8px;
                }
            }
            
            .invoice_status {
                &_btn {
                    background: #F4F4F4;
                    border-radius: 10px;
                    padding: 4px 8px;
                    border: none;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 140%;
                    letter-spacing: 0.04em;
                    color: #212121;
                }
            }

            .invoice_action {
                &_btn {
                    background: #006664;
                    border-radius: 10px;
                    border: none;
                    padding: 8px 12px;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 140%;
                    letter-spacing: 0.04em;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>